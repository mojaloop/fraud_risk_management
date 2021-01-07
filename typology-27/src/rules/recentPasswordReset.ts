const handleRecentPasswordReset = async (
  message: any,
) => {
  const sourceAccountPINDate = message.SourceAccountPINDate;

  if (!sourceAccountPINDate) {
    return false;
  }

  const hours = Math.abs(Date.now() - new Date(message.SourceAccountPINDate).valueOf()) / 3600000;
  if (hours < 72) {
    return true;
  } else {
    return false;
  }
};

export default handleRecentPasswordReset;