const deg2rad = (num: number): number => (num * Math.PI) / 180;

const distance = (
  location1: number[],
  location2: number[],
  useMiles = false,
): number => {
  const coreRadius = 6371; // km
  const dLat: number = deg2rad(location2[0] - location1[0]);
  const dLon: number = deg2rad(location2[1] - location1[1]);
  const a: number =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(location1[0])) *
      Math.cos(deg2rad(location2[0])) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c: number = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  let d: number = Math.round(coreRadius * c);
  if (useMiles) {
    // returns miles instead of kilometers
    d = Math.round(d * 0.621371192);
  }
  return d;
};

const passFail = (
  firstLocation: number[],
  secondLocation: number[],
  firstTransaction: string,
  secondTransaction: string,
  maxSpeed: number,
): boolean => {
  const firstTransactionInt = new Date(firstTransaction).getTime();
  const secondTransactionInt = new Date(secondTransaction).getTime();
  const elapsedTime: number =
    (secondTransactionInt - firstTransactionInt) / 1000; // convert to seconds
  const transactionDistance: number = distance(
    firstLocation,
    secondLocation,
    false,
  );
  const speed: number = transactionDistance / elapsedTime;
  if (speed > maxSpeed) {
    return false;
  }
  return true;
};

export default passFail;
