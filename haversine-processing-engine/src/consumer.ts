import * as kafka from 'kafka-node';
import { log, haversine } from './utils';

import { kafkaType } from "./constants";

const createKafkaClient = (kafkaConfig: kafkaType) => {
		try {
				const client = new kafka.KafkaClient({
						kafkaHost: kafkaConfig.kafkaEndpoint
				});
				const consumer = createKafkaConsumer(kafkaConfig, client)
				consumer.on('message',
					async (message: kafka.Message) => handleMessage(message, kafkaConfig.topic))
					.commit((error: any, data: any) => {
						if (error) {
							log(`Error while committing message: ${error}, ${kafkaConfig.topic}`);
						}
				});
		} catch (e) {
				log(`Unhandled exception with details: ${e}, ${kafkaConfig.topic}`);
		}
}

const handleMessage = async (message: kafka.Message, topic: string) => {
	const parsedData = JSON.parse(message.value.toString());
	console.log(`message received: ${message.value.toString()}`);
	const { lastLocation, previousLocation, firstTransactionTime, secondTransactionTime, maxSpeed } = parsedData;
	const haversineResult = haversine(
		lastLocation,
		previousLocation,
		firstTransactionTime,
		secondTransactionTime,
		maxSpeed
	)
	// TODO: move to Tremor.rs
	log(`Haversine result: ${haversineResult}`);
}

const createKafkaConsumer = (kafkaSettings: kafkaType, client: kafka.KafkaClient) => new kafka.Consumer(
	client,
	[{
		topic: kafkaSettings.topic,
		partition: kafkaSettings.partition
	}],
	{ autoCommit: kafkaSettings.autoCommit }
);

export default createKafkaClient;