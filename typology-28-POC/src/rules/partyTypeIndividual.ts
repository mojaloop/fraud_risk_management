const handleIndividual = (message: any): boolean =>
  message.Payer.PartyIDType === 'PERSONAL_ID';

export default handleIndividual;
