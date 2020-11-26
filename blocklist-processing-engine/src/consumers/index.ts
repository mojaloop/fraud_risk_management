import * as kafka from 'kafka-node';
import { configObj, configuration } from '../config/config';
import { log } from '../helper';
import { handleMessage as handleAccountLookupMessage } from './account-lookup-consumer';
import { handleMessage as handleQuoteMessage } from './quote-consumer';
import { handleMessage as handleTransferMessage } from './transfer-consumer';
import { handleMessage as handlePartyMessage } from './party-consumer';

let producer: kafka.Producer;

const initializeConsumer = () => {
    producer = new kafka.Producer(new kafka.KafkaClient({ kafkaHost: configuration.kafkaEndpoint }), {});
    return new Promise(resolve => {
        producer.on('ready', () => resolve());
    });
}

/**
* Subscribe to the configured Kafka server 
* to the selected Kafka topic
*/
const createKafkaConsumer = (topic: string, configuration: configObj) => {
    log('Starting Blocklist Processing Engine...', topic);
    try {
        const consumer = createConsumer(topic, configuration);
        const handleMessage = getMessageHandler(topic); //: (message: kafka.Message, topic: string) => Promise<void>;

        consumer.on('message', async (message: kafka.Message) => {
            await handleMessage(message, topic, handleBlock);
        });//TODO figure out what commit does and if we should be doing it. 

        log('Started Blocklist Processing Engine.', topic);
    } catch (e) {
        log('Unhandled exception with details: ' + e, topic);
    }
}

const getMessageHandler = (topic: string) => {
    switch (topic) {
        case 'parties':
            return handlePartyMessage;
        case 'transfers':
            return handleTransferMessage;
        case 'accountlookups':
            return handleAccountLookupMessage;
        case 'quotes':
        default:
            return handleQuoteMessage;
    }
}

const createConsumer = (topic: string, config: configObj) => new kafka.Consumer(
    new kafka.KafkaClient({ kafkaHost: config.kafkaEndpoint }),
    [{
        topic: topic,
        partition: config.partition
    }],
    { autoCommit: config.autoCommit }
);

const handleBlock = (msisdn: string, topic: string, isBlocked: number) => {
    if (isBlocked != 0) {
        log(msisdn + " is blocked!", topic);
    } else {
        log(msisdn + " is not blocked.", topic);
    }
    const result = `[BLOCKLIST][${topic}] MSISDN: ${msisdn} ${isBlocked != 0 ? 'is blocked' : 'is not blocked'}`;
    return new Promise(resolve => {
        producer.send([{ topic: configuration.resultTopic, messages: [result], partition: 0 }], (err, data) => {
            if (err)
                log(`Error while sending result of blocking with message: \r\n${err}`, topic);
            resolve();
        });
    });
}

export { createKafkaConsumer, initializeConsumer }
