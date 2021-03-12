jest.useFakeTimers();
import * as kafka from 'kafka-node';
import { config } from '../config';

export class KafkaService {
  ready = false;
  producer: kafka.Producer;

  constructor() {
    const kafkaClient = new kafka.KafkaClient({
      kafkaHost: config.kafkaEndpoint,
    });
    this.producer = new kafka.Producer(kafkaClient, { partitionerType: 2 });

    this.producer.on('ready', () => (this.ready = true));
  }

  async log(
    messageType: 'Error' | 'Warning' | 'Info' | 'Debug',
    message: string,
  ) {
    switch (messageType) {
      case 'Error':
        console.error(message);
        break;
      case 'Warning':
        console.warn(message);
        break;
      case 'Info':
      case 'Debug':
        console.log(message);
        break;
    }

    new Promise((resolver) => {
      this.producer.send(
        [
          {
            topic: config.logTopic,
            messages: [
              `[Predicate Builder Service][${messageType}] ${message}`,
            ],
            partition: config.partition,
          },
        ],
        () => resolver(undefined),
      );
    });
  }

  async publishResult(topic: string, resultValue: string) {
    const result = `{"topic":"${topic}","result": "${resultValue}"}`;
    return new Promise((resolve) => {
      this.producer.send(
        [
          {
            topic: topic,
            messages: [result],
            partition: config.partition,
          },
        ],
        (err) => {
          if (err) {
            this.log(
              'Error',
              `Error while sending result of blocking with message: \r\n${err}`,
            );
          }
          resolve(undefined);
        },
      );
    });
  }
}
