import { Message } from "kafka-node";
import { resolve } from "path";
import { Consumer } from "../base-classes/consumer";
import { Redis } from "../redis/redis";

export class QuoteConsumer extends Consumer {

    async HandleMessage(message: Message, redis: Redis) {
        this.log('New message received:\r\n' + message.value);
        let msisdns = this.GetMSISDNs(message.value.toString());
        let promises: Promise<any>[] = [];

        msisdns.forEach(msisdn => {
            promises.push(new Promise(resolve => {
                redis.IsBlocked(msisdn).then(isBlocked => {
                    if (isBlocked != 0) {
                        this.HandleBlock(msisdn);
                        resolve();
                    }
                    else {
                        this.HandleNotBlock(msisdn);
                        resolve();
                    }
                });
            }));
        });
        console.time('redis');
        await Promise.all(promises).then((values) => {
            console.timeEnd('redis');
            this.log('Message Processed ' + (new Date().toISOString()))
        });
    }

    GetMSISDNs(message: string): string[] {
        let toReturn: string[] = [];
        let jMessage = JSON.parse(message);
        toReturn.push(this.SanitizeNumber(jMessage.payer.partyIdInfo.partyIdentifier));
        toReturn.push(this.SanitizeNumber(jMessage.payee.partyIdInfo.partyIdentifier));
        return toReturn;
    }

}