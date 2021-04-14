import { ExecuteRequest } from "../classes/execute-request";

export class RulesService {
    handleAccountDormancy(
        transfer: ExecuteRequest,
        payeeHistoricalReceiveData: any,
        payeeHistoricalSendData: any,
    ) {
        if (
            payeeHistoricalReceiveData.length < 1 &&
            payeeHistoricalReceiveData.length < 1
        )
            return false;
        const currentTransferDate = new Date(transfer.HTTPTransactionDate);
        const lastTransferReceivedDate =
            payeeHistoricalReceiveData.length >= 1
                ? payeeHistoricalReceiveData.reduce(
                    (latestDate: any, transaction: any) => {
                        if (!latestDate) {
                            return new Date(transaction.HTTPTransactionDate);
                        }
                        const transactionDate = new Date(transaction.HTTPTransactionDate);
                        return transactionDate > latestDate ? transactionDate : latestDate;
                    },
                    false,
                )
                : false;
        const lastTransferMadeDate =
            payeeHistoricalReceiveData.length >= 1
                ? payeeHistoricalReceiveData.reduce(
                    (latestDate: any, transaction: any) => {
                        if (!latestDate) {
                            return new Date(transaction.HTTPTransactionDate);
                        }
                        const transactionDate = new Date(transaction.HTTPTransactionDate);
                        return transactionDate > latestDate ? transactionDate : latestDate;
                    },
                    false,
                )
                : false;
        let lastTransferDate;
        if (lastTransferReceivedDate && lastTransferMadeDate) {
            lastTransferDate =
                lastTransferReceivedDate < lastTransferMadeDate
                    ? lastTransferReceivedDate
                    : lastTransferMadeDate;
        } else if (lastTransferReceivedDate && !lastTransferMadeDate) {
            lastTransferDate = lastTransferReceivedDate;
        } else {
            lastTransferDate = lastTransferMadeDate;
        }
        const timeDifference =
            Math.abs(currentTransferDate.getTime() - lastTransferDate.getTime()) /
            1000 /
            60 /
            60 /
            24 /
            30;
        return !(timeDifference <= 3);
    };

    handleIndividual(message: ExecuteRequest) {
        return message.Payer.PartyIDType === 'PERSONAL_ID';
    };
    isLessThanADay = (currentTransferDate: Date, transaction: ExecuteRequest) => {
        const oldTransferDate = new Date(transaction.HTTPTransactionDate);
        return currentTransferDate.getTime() - oldTransferDate.getTime() <= 24;
    };

    isOlder(firstTransferDate: Date, secondTransferDate: Date) {
        return firstTransferDate.getTime() - secondTransferDate.getTime() > 0;
    }

    countDuplicates(original: number[]) {
        const uniqueItems = new Set();
        let duplicates = 0;
        for (const value of original) {
            if (uniqueItems.has(value)) {
                duplicates++;
            } else {
                uniqueItems.add(value);
            }
        }
        return duplicates;
    };

    handleTransactionMirroring(
        transfer: ExecuteRequest,
        payeeHistoricalSendData: any,
        payeeHistoricalReceiveData: any,
    ) {
        if (
            payeeHistoricalSendData == undefined ||
            payeeHistoricalSendData.length < 1
        )
            return false;
        if (
            payeeHistoricalReceiveData == undefined ||
            payeeHistoricalReceiveData.length < 1
        )
            return false;

        const { HTTPTransactionDate } = transfer;
        const currentTransferDate = new Date(HTTPTransactionDate);

        // Get all transactions received and made from the Payee account over the last day
        const receivedTransactions = payeeHistoricalSendData.filter(
            (transaction: any) => this.isLessThanADay(currentTransferDate, transaction),
        );
        const outgoingTransactions = payeeHistoricalReceiveData.filter(
            (transaction: any) => this.isLessThanADay(currentTransferDate, transaction),
        );

        // Map through each transaction and return the relevant values for the transactions
        // that have repeated Amounts and percentages across the entire list. this will map each
        // Transaction and verify if the later transactions have similar values. Then repeat until the end.
        const mirroringValues = outgoingTransactions.reduce(
            (acc: any, outgoingTransfer: any) => {
                const outgoingTransferDate = new Date(
                    outgoingTransfer.HTTPTransactionDate,
                );

                // Get all outgoing transactions that are older than the currently received transaction.
                const transfersMadeAfterReceived = receivedTransactions.filter(
                    (receivedTransfer: any) =>
                        this.isOlder(
                            outgoingTransferDate,
                            new Date(receivedTransfer.HTTPTransactionDate),
                        ),
                );

                // Compare current transfers amount
                // with the transfers made after the received transfer being evaluated.
                const possibleMirroringTransfers = transfersMadeAfterReceived.map(
                    (transfer: any) => {
                        const amountDifferencePercent =
                            (transfer.Amount / outgoingTransfer.Amount) * 100;
                        const is90Percentile =
                            amountDifferencePercent >= 90 && amountDifferencePercent <= 100;
                        const amountDifference = Math.abs(
                            outgoingTransfer.Amount - transfer.Amount,
                        );
                        return {
                            amountDifferencePercent,
                            is90Percentile,
                            amountDifference,
                        };
                    },
                );

                const trueMirroringTransfers = possibleMirroringTransfers.filter(
                    (result: any) => (!!(result && result.is90Percentile)),
                );
                if (trueMirroringTransfers.length > 0) {
                    trueMirroringTransfers.forEach((mirroringResult: any) =>
                        acc.push(mirroringResult),
                    );
                }
                return acc;
            },
            [],
        );
        const mirroringFlatValues = mirroringValues.flat(1);

        const percentages = mirroringFlatValues.map((transferValue: any) => {
            return transferValue.amountDifferencePercent;
        });

        const amounts = mirroringFlatValues.map((transferValue: any) => {
            return transferValue.amountDifference;
        });

        const repeatedPercentagesCount = this.countDuplicates(percentages);
        const repeatedAmountsCount = this.countDuplicates(amounts);
        return !!(repeatedPercentagesCount > 1 || repeatedAmountsCount > 1);
    };

    handleNewPayeeTransfer(message: any) {
        const { historicalData, transfer } = message;
        if (historicalData == undefined || historicalData.length < 1) return false;

        const ILPCount = historicalData.filter(
            (transaction: any) =>
                transfer.ILPDestinationAccountAddress !==
                transaction.ILPDestinationAccountAddress,
        );
        return ILPCount.length <= 0;
    };



    handleLargeTransactionPayer(
        transfer: any,
        historicalData: any,
    ) {
        if (historicalData == undefined || historicalData.length === 0) return false;

        const tranAmt = transfer.Amount;
        const amounts: number[] = [];
        let total = 0;
        historicalData.forEach((element: any) => {
            const amt = Number(element.Amount);
            // add all transaction amounts in an array
            amounts.push(amt);
            // sum all payments so we can calculate average
            total += amt;
        });

        const standDev = this.getStandardDeviation(amounts) * 3;
        // calculate average
        total = total / amounts.length;

        if (tranAmt > standDev + total) {
            return true;
        } else {
            return false;
        }


    };
    getStandardDeviation(array: number[]) {
        const n = array.length;
        const mean = array.reduce((a, b) => a + b) / n;
        return Math.sqrt(
            array.map((x) => Math.pow(x - mean, 2)).reduce((a, b) => a + b) / n,
        );
    }
    handleCashWithdraw(message: any) {
        return message.TransactionType.TransactionScenario === 'WITHDRAW';
    }



}