export interface IConfigObj {
  kafkaEndpoint: string;
  topic: string;
  resultTopic: string;
  consumerGroup: string;
  partition: number;
  autoCommit: boolean;
  logTopic: string;
  maxQueueSize: number;
  maxParallelHandles: number;
}
