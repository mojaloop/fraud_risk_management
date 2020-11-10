import * as kafkaaaa from 'kafka-node';
import { AppConfiguration } from "read-appsettings-json";

export class Consumer {

    constructor() {
    }

    Start() {
        console.log('Starting server');
        try {

            let kafkaHost = AppConfiguration.Setting().kafkaEndpoint;
            let client = new kafkaaaa.KafkaClient({
                kafkaHost: kafkaHost
            });

            let consumer = new kafkaaaa.Consumer(
                client,
                [
                    { topic: AppConfiguration.Setting().topic, partition: AppConfiguration.Setting().partition }
                ],
                {
                    autoCommit: AppConfiguration.Setting().autoCommit
                }
            );

            consumer.on('message', function (message: kafkaaaa.Message) {
                console.log('New message received:\r\n' + message.value);
            }).commit((error: any, data: any) => {
                if (error)
                    console.log('Error while committing message: ' + error);
            });

            // consumer.addTopics(['t1'], function (err: any, added: any) {
            //     if (err)
            //         console.log('Error while adding topics: ' + err);
            //     else
            //         console.log('Successfully subscribed to topics t1 and t2');
            // });

            console.log('Started server.');
        } catch (e) {
            console.log('Unhandled exception with details: ' + e);
        }

    }
}