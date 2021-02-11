const handleSimSwap = (message: any): boolean => {
  const currentICCID: string = message.transfer.PayerICCID;

  const { historicalData } = message;

  if (
    historicalData == undefined ||
    historicalData.length == 0 ||
    historicalData[0] == undefined
  ) {
    return false;
  }
  if (currentICCID === historicalData[0].PayerICCID) {
    return false;
  } else {
    return true;
  }
};

export default handleSimSwap;
