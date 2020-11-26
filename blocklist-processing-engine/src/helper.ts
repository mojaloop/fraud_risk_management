/**
 * Makes sure the MSISDN starts with +233
 */
const sanitizeNumber = (number: string): string => {
    if (number.startsWith('0')) {
        number = number.substring(1);
        number = '+233' + number;
    } else if (!number.startsWith('+'))
        number = '+' + number;
    return number;
}

/** Logs the provided message */
const log = (message: string, topic: string) => {
    // TODO find a proper logger
    console.log('[' + topic + '] ' + message);
}

export { log, sanitizeNumber }