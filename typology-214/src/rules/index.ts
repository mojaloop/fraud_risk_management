import handleTransactionMirroring from './transaction-mirroring';
import handleTransactionDivergence from './transaction-divergence';
import handleTransactionsBetweenParties from './transactions-between-parties';
import handleLargeTransactionPayer from './large-transaction-payer'

export default {
  handleTransactionMirroring,
  handleTransactionDivergence,
  handleTransactionsBetweenParties,
  handleLargeTransactionPayer,
}