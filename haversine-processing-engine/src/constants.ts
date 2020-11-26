interface kafkaType {
    topic: string,
    partition: number,
    autoCommit: boolean,
    kafkaEndpoint: string,
}

export {
  kafkaType,
}