const handleBenfordsLaw = (
  transfer: any,
  historicalData: any,
): boolean => {
  const currentICCID: string = transfer.PayerICCID;
  const numAmounts = historicalData.length;
  let histogram = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  let expected = [0, 0, 0, 0, 0, 0, 0, 0, 0];

  if (historicalData == undefined
    || historicalData[0] == undefined
    || numAmounts < 50) {
    return false;
  }

  historicalData.forEach(element => {
    histogram[element.Amount[0]-1]++;
  });

  // Don't need this I don't think. It's listed as step 3
  // for (let index = 0; index < histogram.length; index++) {
  //   histogram[index] = histogram[index] / numAmounts * 100;
  // }

  expected[0] = 0.301 * numAmounts;
  expected[0] = 0.176 * numAmounts;
  expected[0] = 0.125 * numAmounts;
  expected[0] = 0.097 * numAmounts;
  expected[0] = 0.079 * numAmounts;
  expected[0] = 0.067 * numAmounts;
  expected[0] = 0.058 * numAmounts;
  expected[0] = 0.051 * numAmounts;
  expected[0] = 0.046 * numAmounts;

  if (currentICCID === historicalData[0].PayerICCID) {
    return false;
  } else {
    return true;
  }
}

export default handleBenfordsLaw;