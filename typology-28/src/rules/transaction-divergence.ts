const handleTransactionDivergence = (transaction: any, payeeHistoricalSendData: any) => {
  const transactionDate = new Date(transaction.HTTPTransactionDate);
  // Count transaction over the last 8 hours
  const latestTransactions = payeeHistoricalSendData.filter((transfer: any) => {
    const oldTransferDate = new Date(transfer.HTTPTransactionDate);
    const timeDifference = (transactionDate.getTime() - oldTransferDate.getTime()) / 1000 / 60 / 24;
    return timeDifference >= 8 ? true : false;
  });
  return latestTransactions.length > 10 ? true : false;
}

export default handleTransactionDivergence;