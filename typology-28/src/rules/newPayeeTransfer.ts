const handleNewPayeeTransfer = (
  message: any,
): boolean => {
  const { historicalData, transfer } = message;
  const ILPCount = historicalData
    .filter((transaction: any) => transfer.ILPDestinationAccountAddress !== transaction.ILPDestinationAccountAddress);
  return ILPCount.length <= 0;
};

export default handleNewPayeeTransfer;