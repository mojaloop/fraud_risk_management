interface HistoricalData {
  Amount: string;
}

const handleExceptionallyLargeTransfer = (
  transfer: {
    Amount: number;
    SourceAccountBalance: number;
  },
  historicalData: HistoricalData[],
): boolean => {
  if (historicalData === undefined || historicalData.length === 0) return false;

  const { Amount } = transfer;
  const biggestTransactionAmount = Math.max(
    ...historicalData.map((transaction: { Amount: string }) => {
      return parseInt(transaction.Amount);
    }),
  );
  return biggestTransactionAmount + biggestTransactionAmount * 0.5 < Amount;
};

export default handleExceptionallyLargeTransfer;
