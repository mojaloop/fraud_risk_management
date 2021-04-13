const isLessThanADay = (currentTransferDate: Date, transaction: any) => {
  const oldTransferDate = new Date(transaction.HTTPTransactionDate);
  return currentTransferDate.getTime() - oldTransferDate.getTime() <= 24;
};

const isOlder = (firstTransferDate: Date, secondTransferDate: Date): boolean =>
  firstTransferDate.getTime() - secondTransferDate.getTime() > 0;

const countDuplicates = (original: number[]) => {
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

const handleTransactionMirroring = (
  transfer: any,
  payeeHistoricalSendData: any,
  payeeHistoricalReceiveData: any,
): boolean => {
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
    (transaction: any) => isLessThanADay(currentTransferDate, transaction),
  );
  const outgoingTransactions = payeeHistoricalReceiveData.filter(
    (transaction: any) => isLessThanADay(currentTransferDate, transaction),
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
          isOlder(
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

  const repeatedPercentagesCount = countDuplicates(percentages);
  const repeatedAmountsCount = countDuplicates(amounts);
  return !!(repeatedPercentagesCount > 1 || repeatedAmountsCount > 1);
};

export default handleTransactionMirroring;
