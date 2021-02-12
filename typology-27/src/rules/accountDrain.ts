const handleAccountDrain = (transfer: {
  Amount: number;
  SourceAccountBalance: number;
}): boolean => transfer.Amount >= transfer.SourceAccountBalance * 0.9;

export default handleAccountDrain;
