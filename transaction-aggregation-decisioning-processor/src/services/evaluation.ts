import { iScore } from '../interfaces/iScore';

export const getScore = (
  resultsArray: number[],
  transactionID: string,
): iScore => {
  const scoreSum = resultsArray.reduce(
    (sum: number, score: number) => sum + score,
  );
  const scoreAverage = scoreSum / resultsArray.length;
  return {
    transactionID,
    message:
      scoreAverage > 0.75
        ? 'Transaction is positive for Fraud/Risk'
        : 'Transaction is Negative for Fraud/Risk',
    score: scoreAverage,
  };
};
