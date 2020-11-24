import * as kafka from 'kafka-node';
import { AppConfiguration } from "read-appsettings-json";
import { Redis } from '../redis/redis';

export abstract class Consumer {

    private topic: string;

    constructor(topic: string) {
        this.topic = topic;
    }

    /**
    * Subscribe to the configured Kafka server 
    * to the selected Kafka topic
    */
    Start(redis: Redis) {
        this.log('Starting Blocklist Processing Engine...');
        try {
            let kafkaHost = AppConfiguration.Setting().kafkaEndpoint;
            let client = new kafka.KafkaClient({
                kafkaHost: kafkaHost
            });

            let consumer = new kafka.Consumer(
                client,
                [
                    { topic: this.topic, partition: AppConfiguration.Setting().partition }
                ],
                {
                    autoCommit: AppConfiguration.Setting().autoCommit
                }
            );

            consumer.on('message', async (message: kafka.Message) => {
                return this.HandleMessage(message, redis);
            }).commit((error: any, data: any) => {
                if (error)
                    this.log('Error while committing message: ' + error);
            });

            this.log('Started Blocklist Processing Engine.');
        } catch (e) {
            this.log('Unhandled exception with details: ' + e);
        }
    }

    async HandleMessage(message: kafka.Message, redis: Redis) {
        this.log('New message received:\r\n' + message.value);
        let msisdn = this.GetMSISDN(message.value.toString());
        await redis.IsBlocked(msisdn).then(isBlocked => {
            if (isBlocked != 0) {
                this.HandleBlock(msisdn);
            }
            else {
                this.HandleNotBlock(msisdn);
            }
        });
    }

    GetMSISDN(message: string): string {
        throw new Error('Not implemented');
    }

    HandleBlock(msisdn: string) {
        // Raise error to Score Engine
        this.log(msisdn + " is blocked!");
    }

    HandleNotBlock(msisdn: string) {
        // Who knows. Raise no error? 
        this.log(msisdn + " is not blocked.");
    }

    /**
     * Makes sure the MSISDN starts with +233
     */
    SanitizeNumber(number: string): string {
        if (number.startsWith('0')) {
            number = number.substring(1);
            number = '+233' + number;
        } else if (!number.startsWith('+'))
            number = '+' + number;
        return number;
    }

    /** Logs the provided message */
    log(message: string) {
        // TODO find a proper logger
        console.log('[' + this.topic + '] ' + message);
    }
}