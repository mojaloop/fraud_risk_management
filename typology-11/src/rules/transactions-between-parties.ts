import { RedisClient } from 'redis';
import { get } from '../redis-client';

const getTransfersFromILPsArray = async (outgoingTransfersClient: RedisClient, ILPS: string[]): Promise<any> => {
  const accountsTransfers = await Promise.all(
    ILPS.map((ILP: string) => new Promise((resolve) => {
      resolve(get(outgoingTransfersClient, ILP));
    }))
  );

  if (accountsTransfers == undefined || accountsTransfers.length == 0) return undefined;

  return accountsTransfers.reduce((payeesAcc: any, payee: any) => {
    if (payee === null) return payeesAcc;
    const payeeTransfers = JSON.parse(payee);
    if (payeeTransfers.length < 1) return payeesAcc;
    const payeeNames = payeeTransfers.map((transfer: any) => transfer.ILPDestinationAccountAddress);
    return [...payeesAcc, ...payeeNames];
  }, []);
}

const removeDuplicates = (names: any) => names.filter((c: any, index: number) => {
  return names.indexOf(c) === index;
});

const removeValuesFromSecondArray = (firstArr: any, names: any) => names.filter((c: any, index: number) => {
  return firstArr.indexOf(c) === index;
});


const handleTransactionsBetweenParties = async (
  transfer: any,
  outgoingTransfersClient: RedisClient,
  historicalData: any
) => {
  if (historicalData == undefined || historicalData.length == 0) return false;

  const payeesList = historicalData.map((transfer: any) => transfer.ILPDestinationAccountAddress);
  payeesList.push(transfer.ILPDestinationAccountAddress);
  const uniqueNames = removeDuplicates(payeesList);

  // get Payess names - tier 1
  const tier1Payees = await getTransfersFromILPsArray(outgoingTransfersClient, uniqueNames);
  if (tier1Payees !== undefined) {
    payeesList.push(tier1Payees);
    uniqueNames.push(removeDuplicates(tier1Payees));

    // get Payess names - tier 2
    const uniqueTier2Names = removeValuesFromSecondArray(uniqueNames, tier1Payees);
    const tier2Payees = await getTransfersFromILPsArray(outgoingTransfersClient, removeDuplicates(uniqueTier2Names));
    if (tier2Payees !== undefined) {
      payeesList.push(tier2Payees);
      uniqueNames.push(removeDuplicates(tier2Payees));

      // get Payess names - tier 3
      const uniqueTier3Names = removeValuesFromSecondArray(uniqueNames, tier2Payees);
      const tier3Payees = await getTransfersFromILPsArray(outgoingTransfersClient, removeDuplicates(uniqueTier3Names));
      if (tier3Payees != undefined) {
        payeesList.push(tier3Payees);
        uniqueNames.push(removeDuplicates(tier3Payees));
      }
    }
  }

  if (payeesList.length < 8) return false;
  const uniqueEntitiesPercentage = uniqueNames.length / payeesList.length * 100;
  return (uniqueEntitiesPercentage > 33.33) ? true : false;
}

export default handleTransactionsBetweenParties;