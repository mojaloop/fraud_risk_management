import { getScore } from '../../services';
import { iScore } from '../../interfaces/iScore';

describe('Evaluation Service run without error', () => {
  test('getScore should return with positive', async () => {
    const requestBody = getScore([0.8], 'ExampleTransactionID');

    const expectedScore: iScore = {
      transactionID: 'ExampleTransactionID',
      message: 'Transaction is positive for Fraud/Risk',
      score: 0.8,
    };

    expect(requestBody).toMatchObject(expectedScore);
  });

  test('getScore should return with negative', async () => {
    const requestBody = getScore([0.6], 'ExampleTransactionID');

    const expectedScore: iScore = {
      transactionID: 'ExampleTransactionID',
      message: 'Transaction is negative for Fraud/Risk',
      score: 0.6,
    };

    expect(requestBody).toMatchObject(expectedScore);
  });
});
