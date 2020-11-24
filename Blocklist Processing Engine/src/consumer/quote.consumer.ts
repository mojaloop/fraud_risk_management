import { Message } from "kafka-node";
import { Consumer } from "../base-classes/consumer";
import { Redis } from "../redis/redis";

export class QuoteConsumer extends Consumer {

    async HandleMessage(message: Message, redis: Redis) {
        this.log('New message received:\r\n' + message.value);
        let msisdns = this.GetMSISDNs(message.value.toString());
        let promises: Promise<any>[] = [];

        msisdns.forEach(msisdn => {
            promises.push(new Promise(() => {
                redis.IsBlocked(msisdn).then(isBlocked => {
                    if (isBlocked != 0) {
                        this.HandleBlock(msisdn);
                    }
                    else {
                        this.HandleNotBlock(msisdn);
                    }
                });
            }));
        });

        Promise.all(promises).then((values) => { });
    }

    GetMSISDNs(message: string): string[] {
        let toReturn: string[] = [];
        let jMessage = JSON.parse(message);
        toReturn.push(this.SanitizeNumber(jMessage.payer.partyIdInfo.partyIdentifier));
        toReturn.push(this.SanitizeNumber(jMessage.payee.partyIdInfo.partyIdentifier));
        return toReturn;
    }

}