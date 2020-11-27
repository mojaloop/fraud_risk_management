interface KafkaType {
  topic: string,
  partition: number,
  autoCommit: boolean,
  kafkaEndpoint: string,
}

export {
  // eslint-disable-next-line import/prefer-default-export
  KafkaType,
};
