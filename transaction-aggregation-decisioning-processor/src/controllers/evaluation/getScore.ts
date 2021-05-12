import { iScore } from './types';

export const getScore = (resultsArray: number[]): iScore => {
  const scoreSum = resultsArray.reduce(
    (sum: number, score: number) => sum + score,
  );
  const scoreAverage = scoreSum / resultsArray.length;
  return {
    message:
      scoreAverage > 0.75
        ? 'Transaction is positive for Fraud/Risk'
        : 'Transaction is Negative for Fraud/Risk',
    score: scoreAverage,
  };
};
