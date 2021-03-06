// move to typology 11

const handleTransactionDivergence = (
  transaction: any,
  payeeHistoricalSendData: any,
) => {
  if (
    payeeHistoricalSendData == undefined ||
    payeeHistoricalSendData.length < 10
  )
    return false;

  const transactionDate = new Date(transaction.HTTPTransactionDate);
  // Count transaction over the last 8 hours
  const latestTransactions = payeeHistoricalSendData.filter((transfer: any) => {
    const oldTransferDate = new Date(transfer.HTTPTransactionDate);
    const timeDifference =
      transactionDate.getHours() - oldTransferDate.getHours();
    return timeDifference <= 8;
  });
  return latestTransactions.length > 10;
};

export default handleTransactionDivergence;
