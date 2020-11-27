/**
 * Makes sure the MSISDN starts with +233
 */
const sanitizeNumber = (number: string): string => {
  let toReturn = number;
  if (number.startsWith('0')) {
    toReturn = number.substring(1);
    toReturn = `+233${number}`;
  } else if (!number.startsWith('+')) {
    toReturn = `+${number}`;
  }
  return toReturn;
};

/** Logs the provided message */
const log = (message: string, topic: string) => {
  // TODO find a proper logger
  console.log(`[${topic}] ${message}`);
};

export { log, sanitizeNumber };
