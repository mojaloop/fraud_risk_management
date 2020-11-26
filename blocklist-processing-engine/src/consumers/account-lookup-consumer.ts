import * as kafka from 'kafka-node';
import { isBlocked } from "../redis-client/redis-client";
import { log, sanitizeNumber } from '../helper';

const getMSISDN = (message: string): string => {
    // TODO parse message as json and get the msisdn
    let msisdn = sanitizeNumber(message);
    return msisdn;
}

const handleMessage = async (message: kafka.Message, topic: string, handleBlock: (msisdn: string, topic: string, isBlocked: number) => any) => {
    log('New message received:\r\n' + message.value, topic);
    const msisdn = getMSISDN(message.value.toString());
    const blocked = await isBlocked(msisdn);
    await handleBlock(msisdn, topic, blocked);
    log('Message Processed ' + new Date().toISOString(), topic);
}

export { handleMessage }
