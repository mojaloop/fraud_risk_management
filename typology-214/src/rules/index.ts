import handleTransactionMirroring from './transaction-mirroring';
import handleTransactionsBetweenParties from './transactions-between-parties';
import handleLargeTransactionPayer from './large-transaction-payer';
import handleAccountDormancy from './account-dormancy';
import handleCashWithdraw from './cashWithdraw';
import handleNewPayeeTransfer from './newPayeeTransfer';
import handleIndividual from './partyTypeIndividual';

export default {
  handleTransactionMirroring,
  handleTransactionsBetweenParties,
  handleLargeTransactionPayer,
  handleAccountDormancy,
  handleCashWithdraw,
  handleNewPayeeTransfer,
  handleIndividual
}