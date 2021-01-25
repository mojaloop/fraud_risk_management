const isLessThanADay = (currentTransferDate: Date, transaction: any) => {
  const oldTransferDate = new Date(transaction.HTTPTransactionDate);
  return ((currentTransferDate.getHours() - oldTransferDate.getHours()) <= 24);
}

const isOlder = (
  firstTransferDate: Date,
  secondTransferDate: Date
) => (firstTransferDate.getHours() - secondTransferDate.getHours() < 0);

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
  if (payeeHistoricalSendData == undefined || payeeHistoricalSendData.length < 1) return false;
  
  const { HTTPTransactionDate } = transfer;
  const currentTransferDate = new Date(HTTPTransactionDate);

  // Get all transactions received and made from the Payee account over the last day
  const lastReceivedTransactions = payeeHistoricalSendData.filter((transaction: any) =>
    isLessThanADay(currentTransferDate, transaction));
  const lastOutgoingTransactions = payeeHistoricalReceiveData.filter((transaction: any) =>
    isLessThanADay(currentTransferDate, transaction));

  const mirroringValues = lastOutgoingTransactions.reduce((acc: any, outgoingTransfer: any) => {
    const outgoingTransferDate = new Date(outgoingTransfer.HTTPTransactionDate);

    // Get all outgoing transactions that are older than the currently received transaction.
    const transfersMadeAfterReceived = lastReceivedTransactions
      .filter((receivedTransfer: any) => isOlder(outgoingTransferDate, new Date(receivedTransfer.HTTPTransactionDate)));

    // Compare current transfers amount 
    // with the transfers made after the received transfer being evaluated. 
    const possibleMirroringTransfers = transfersMadeAfterReceived.map((transfer: any) => {
      const amountDifferencePercent = (transfer.Amount / outgoingTransfer.Amount) * 100;
      const is90Percentile = amountDifferencePercent >= 90 && amountDifferencePercent <= 100;
      const amountDifference = Math.abs(outgoingTransfer.Amount - transfer.Amount);
      return {
        amountDifferencePercent,
        is90Percentile,
        amountDifference
      }
    });
    const trueMirroringTransfers = possibleMirroringTransfers
      .filter((result: any) => result.is90Percentile ? true : false);
    if (trueMirroringTransfers.length > 0) {
      trueMirroringTransfers.forEach((mirroringResult: any) => acc.push(mirroringResult))
    }
    return acc;
  }, []);

  const percentages = mirroringValues.map((value: any) => value.amountDifferencePercent);
  const amounts = mirroringValues.map((value: any) => value.amountDifference);

  const repeatedPercentagesCount = countDuplicates(percentages);
  const repeatedAmountsCount = countDuplicates(amounts);
  return (repeatedPercentagesCount > 1 || repeatedAmountsCount > 1) ? true : false;
};

export default handleTransactionMirroring;