const handleAccountDrain = (
  transfer: any,
): boolean => transfer.Amount >= (transfer.SourceAccountBalance * 0.9);

export default handleAccountDrain;