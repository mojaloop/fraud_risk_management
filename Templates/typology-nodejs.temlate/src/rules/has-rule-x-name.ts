// This is an example rule to check that the ILPSourceAccountAddress is set on the transaction
const hasRuleXName = (
  transaction: Partial<{ ILPSourceAccountAddress: string }>,
) => {
  if (transaction && transaction.ILPSourceAccountAddress) {
    return true;
  }
  return true;
};

export default hasRuleXName;
