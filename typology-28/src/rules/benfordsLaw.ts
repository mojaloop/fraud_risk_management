const handleBenfordsLaw = (transfer: any, historicalData: any): boolean => {
  if (
    historicalData == undefined ||
    historicalData.length == 0 ||
    historicalData[0] == undefined
  ) {
    return false;
  }

  const numAmounts = historicalData.length;
  const observed = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  const expected = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  let chiSquare = 0;

  if (numAmounts < 50) {
    return false;
  }

  historicalData.forEach((element: { Amount: number[] }) => {
    observed[element.Amount[0] - 1]++;
  });

  // Don't need this I don't think. It's listed as step 3
  // for (let index = 0; index < observed.length; index++) {
  //   observed[index] = observed[index] / numAmounts * 100;
  // }

  expected[0] = 0.301 * numAmounts;
  expected[1] = 0.176 * numAmounts;
  expected[2] = 0.125 * numAmounts;
  expected[3] = 0.097 * numAmounts;
  expected[4] = 0.079 * numAmounts;
  expected[5] = 0.067 * numAmounts;
  expected[6] = 0.058 * numAmounts;
  expected[7] = 0.051 * numAmounts;
  expected[8] = 0.046 * numAmounts;

  for (let index = 0; index < expected.length; index++) {
    chiSquare +=
      Math.pow(observed[index] - expected[index], 2) / expected[index];
  }

  if (chiSquare > 15.507) {
    return true;
  } else {
    return false;
  }
};

export default handleBenfordsLaw;
