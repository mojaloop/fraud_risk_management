const handleAccountDormancy = (transfer: any, payeeHistoricalReceiveData: any, payeeHistoricalSendData: any): boolean => {
  if (payeeHistoricalReceiveData.length < 1 && payeeHistoricalReceiveData.length < 1) return false;
  const currentTransferDate = new Date(transfer.HTTPTransactionDate);
  const lastTransferReceivedDate = payeeHistoricalReceiveData.length >= 1 ? payeeHistoricalReceiveData.reduce((latestDate: any, transaction: any) => {
    if (!latestDate) {
      return new Date(transaction.HTTPTransactionDate);
    }
    const transactionDate = new Date(transaction.HTTPTransactionDate);
    return transactionDate > latestDate
      ? transactionDate : latestDate;
  }, false)
    : false;
  const lastTransferMadeDate = payeeHistoricalReceiveData.length >= 1 ? payeeHistoricalReceiveData.reduce((latestDate: any, transaction: any) => {
    if (!latestDate) {
      return new Date(transaction.HTTPTransactionDate);
    }
    const transactionDate = new Date(transaction.HTTPTransactionDate);
    return transactionDate > latestDate
      ? transactionDate : latestDate;
  }, false)
    : false;
  let lastTransferDate;
  if (lastTransferReceivedDate && lastTransferMadeDate) {
    lastTransferDate = lastTransferReceivedDate < lastTransferMadeDate
      ? lastTransferReceivedDate
      : lastTransferMadeDate;
  } else if (lastTransferReceivedDate && !lastTransferMadeDate) {
    lastTransferDate = lastTransferReceivedDate
  } else {
    lastTransferDate = lastTransferMadeDate
  }
  const timeDifference = Math.abs(currentTransferDate.getTime() - lastTransferDate.getTime())
    / 1000 / 60 / 60 / 24 / 30;
  return timeDifference <= 3 ? false : true;
}

export default handleAccountDormancy;