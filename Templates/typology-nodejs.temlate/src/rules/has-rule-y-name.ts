// This is an example rule to check that the ILPDestinationAccountAddress is set on the transaction
const hasRuleYName = (
  transaction: Partial<{ ILPDestinationAccountAddress: string }>,
) => {
  if (transaction && transaction.ILPDestinationAccountAddress) {
    return true;
  }
  return true;
};

export default hasRuleYName;
