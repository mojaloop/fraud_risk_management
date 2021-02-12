const handleCashWithdraw = (message: {
  TransactionType: {
    TransactionScenario: string;
  };
}): boolean => message.TransactionType.TransactionScenario === 'WITHDRAW';

export default handleCashWithdraw;
