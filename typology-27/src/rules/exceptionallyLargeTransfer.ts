const handleExceptionallyLargeTransfer = (
  transfer: any,
  historicalData: any,
): boolean => {
  if (historicalData == undefined || historicalData.length == 0) return false;
  const { Amount } = transfer;
  const biggestTransactionAmount = Math.max(...historicalData
    .map((transaction: any) => {
      return parseInt(transaction.Amount);
    }));
  return biggestTransactionAmount + (biggestTransactionAmount * 0.5) < Amount;
};

export default handleExceptionallyLargeTransfer;
