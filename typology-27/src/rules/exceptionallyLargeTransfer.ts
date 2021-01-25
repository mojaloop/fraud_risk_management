const handleExceptionallyLargeTransfer = (
  message: any,
): boolean => {
  if(message.historicalData == undefined || message.historicalData.length == 0) return false;

  const { amount } = message.transfer.Amount;
  const biggestTransactionAmount = Math.max(message.historicalData
    .map((transaction: any) => transaction.Amount));
  return biggestTransactionAmount + (biggestTransactionAmount * 0.5) < amount;
};

export default handleExceptionallyLargeTransfer;



// FIIIIIIIIIIIIIIIIIIIIIIX