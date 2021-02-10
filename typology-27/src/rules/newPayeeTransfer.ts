const handleNewPayeeTransfer = (
  transfer: any,
  historicalData: any,
): boolean => {
  if (historicalData == undefined || historicalData.length == 0) return false;
  const ILPCount = historicalData.filter(
    (transaction: any) =>
      transfer.ILPDestinationAccountAddress !==
      transaction.ILPDestinationAccountAddress,
  );
  return ILPCount.length > 0;
};

export default handleNewPayeeTransfer;
