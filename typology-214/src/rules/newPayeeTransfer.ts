const handleNewPayeeTransfer = (
  message: any,
): boolean => {
  const { historicalData, transfer } = message;
  if (historicalData == undefined || historicalData.length < 1) return false;

  const ILPCount = historicalData
    .filter((transaction: any) => transfer.ILPDestinationAccountAddress !== transaction.ILPDestinationAccountAddress);
  return ILPCount.length <= 0;
};

export default handleNewPayeeTransfer;