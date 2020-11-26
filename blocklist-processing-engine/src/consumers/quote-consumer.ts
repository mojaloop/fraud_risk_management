import * as kafka from 'kafka-node';
import { isBlocked } from "../redis-client/redis-client";
import { log, sanitizeNumber } from '../helper';

const handleMessage = async (message: kafka.Message, topic: string, handleBlock: (msisdn: string, topic: string, isBlocked: number) => any) => {
    //log('New message received:\r\n' + message.value, topic);
    const msisdns = getMSISDNs(message.value.toString());
    let promises: Promise<any>[] = [];

    msisdns.forEach(msisdn => {
        promises.push(new Promise(async resolve => {
            const blocked = await isBlocked(msisdn);
            await handleBlock(msisdn, topic, blocked);
            resolve();
        }));
    });
    await Promise.all(promises).then(() => {
        log('Message Processed ' + new Date().toISOString(), topic)
    });
}

const getMSISDNs = (message: string): string[] => {
    let toReturn: string[] = [];
    let jMessage = JSON.parse(message);
    toReturn.push(sanitizeNumber(jMessage.payer.partyIdInfo.partyIdentifier));
    toReturn.push(sanitizeNumber(jMessage.payee.partyIdInfo.partyIdentifier));
    return toReturn;
}

export { handleMessage }