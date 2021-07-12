/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/indent, no-console */
import { CustomerCreditTransferInitiation } from '../classes/iPain001Transaction';
export const handleAccountDormancy = (
  transaction: CustomerCreditTransferInitiation,
  payeeHistoricalData: any,
): boolean => {
  if (payeeHistoricalData.length < 1 && payeeHistoricalData.length < 1)
    return false;

  const currentTransferDate = new Date(transaction.GroupHeader.CreationDateTime);

  const lastTransferReceivedDate =
    payeeHistoricalData.length >= 1
      ? payeeHistoricalData.reduce((latestDate: any, transaction: any) => {
          if (!latestDate) {
            return new Date(transaction.GroupHeader.CreationDateTime);
          }
          const transactionDate = new Date(transaction.GroupHeader.CreationDateTime);
          return transactionDate > latestDate ? transactionDate : latestDate;
        }, false)
      : false;

  const lastTransferMadeDate =
    payeeHistoricalData.length >= 1
      ? payeeHistoricalData.reduce((latestDate: any, transaction: any) => {
          if (!latestDate) {
            return new Date(transaction.GroupHeader.CreationDateTime);
          }
          const transactionDate = new Date(transaction.GroupHeader.CreationDateTime);
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
