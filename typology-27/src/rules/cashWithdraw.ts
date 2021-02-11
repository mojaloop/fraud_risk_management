const handleCashWithdraw = (message: any): boolean =>
  message.TransactionType.TransactionScenario === 'WITHDRAW';

export default handleCashWithdraw;
