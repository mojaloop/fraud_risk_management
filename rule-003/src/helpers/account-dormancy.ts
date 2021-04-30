/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/indent, no-console */
import { ITransaction } from '../interfaces/iTransaction';

export const handleAccountDormancy = (
  transaction: ITransaction,
  payeeHistoricalData: any,
): boolean => {
  if (payeeHistoricalData.length < 1 && payeeHistoricalData.length < 1)
    return false;

  const currentTransferDate = new Date(transaction.HTTPTransactionDate);

  const lastTransferReceivedDate =
    payeeHistoricalData.length >= 1
      ? payeeHistoricalData.reduce((latestDate: any, transaction: any) => {
          if (!latestDate) {
            return new Date(transaction.HTTPTransactionDate);
          }
          const transactionDate = new Date(transaction.HTTPTransactionDate);
          return transactionDate > latestDate ? transactionDate : latestDate;
        }, false)
      : false;

  const lastTransferMadeDate =
    payeeHistoricalData.length >= 1
      ? payeeHistoricalData.reduce((latestDate: any, transaction: any) => {
          if (!latestDate) {
            return new Date(transaction.HTTPTransactionDate);
          }
          const transactionDate = new Date(transaction.HTTPTransactionDate);
          return transactionDate > latestDate ? transactionDate : latestDate;
        }, false)
      : false;

  let lastTransferDate;
  if (lastTransferReceivedDate && lastTransferMadeDate) {
    lastTransferDate =
      lastTransferReceivedDate < lastTransferMadeDate
        ? lastTransferReceivedDate
        : lastTransferMadeDate;
  } else if (lastTransferReceivedDate && !lastTransferMadeDate) {
    lastTransferDate = lastTransferReceivedDate;
  } else {
    lastTransferDate = lastTransferMadeDate;
  }

  const timeDifference =
    Math.abs(currentTransferDate.getTime() - lastTransferDate.getTime()) /
    1000 /
    60 /
    60 /
    24 /
    30;

  return !(timeDifference <= 3);
};
