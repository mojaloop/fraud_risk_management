const isLessThanADay = (currentTransferDate: Date, transaction: any) => {
  const oldTransferDate = new Date(transaction.HTTPTransactionDate);
  return (((currentTransferDate.getTime() - oldTransferDate.getTime()) / 1000 / 60 / 24) <= 24);
}

const isOlder = (
  firstTransferDate: Date,
  secondTransferDate: Date
) => (firstTransferDate.getTime() - secondTransferDate.getTime() < 0);

const countDuplicates = (original: number[]) => {
  const uniqueItems = new Set();
  const duplicates = new Set();
  for (const value of original) {
    if (uniqueItems.has(value)) {
      duplicates.add(value);
      uniqueItems.delete(value);
    } else {
      uniqueItems.add(value);
    }
  }
  return duplicates.size;
}

const handleTransactionMirroring = (
  transfer: any,
  payeeHistoricalSendData: any,
  payeeHistoricalReceiveData: any,
): boolean => {
  const { HTTPTransactionDate } = transfer;
  const currentTransferDate = new Date(HTTPTransactionDate);

  // Get all transactions received and made from the Payee account
  const lastReceivedTransactions = payeeHistoricalSendData.filter((transaction: any) =>
    isLessThanADay(currentTransferDate, transaction));
  const lastOutgoingTransactions = payeeHistoricalReceiveData.filter((transaction: any) =>
    isLessThanADay(currentTransferDate, transaction));

  const mirroringValues = lastReceivedTransactions.forEach((receivedTransfer: any) => {
    const transferDate = new Date(receivedTransfer.HTTPTransactionDate);

    const transfersMadeAfterReceived = lastOutgoingTransactions
      .filter((oldTransfer: any) => isOlder(transferDate, new Date(oldTransfer.HTTPTransactionDate)));

    const possibleMirroringTransfers = transfersMadeAfterReceived.map((transfer: any) => {
      const amountDifferencePercent = receivedTransfer.Amount / transfer.Amount;
      const is90Percentile = amountDifferencePercent >= 0.9 || amountDifferencePercent <= 1;
      const amountDifference = receivedTransfer.Amount - transfer.Amount;
      return {
        amountDifferencePercent,
        is90Percentile,
        amountDifference
      }
    });

    const trueMirroringTransfers = possibleMirroringTransfers
      .filter((result: any) => result.is90Percentile ? true : false);

    return trueMirroringTransfers;
  });

  const percentages = mirroringValues.map((value: any) => value.amountDifferencePercent);
  const amounts = mirroringValues.map((value: any) => value.amountDifference);

  const repeatedPercentagesCount = countDuplicates(percentages);
  const repeatedAmountsCount = countDuplicates(amounts);

  return (repeatedPercentagesCount > 1 || repeatedAmountsCount > 1) ? true : false;
};

export default handleTransactionMirroring;