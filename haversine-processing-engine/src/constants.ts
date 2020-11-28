interface KafkaType {
  topic: string,
  partition: number,
  autoCommit: boolean,
  kafkaEndpoint: string,
}

interface KafkaMessage {
  topic: string,
  partition: number,
  messages: any,
}

export {
  KafkaType,
  KafkaMessage,
};
