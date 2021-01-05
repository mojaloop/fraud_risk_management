interface AzureType {
  azureAccount: string,
  azureKey: string,
  azureShare: string,
  azureDirectory: string,
}

interface ConfigType {
  redisHost: string,
  redisPort: number,
  redisDB: number,
  redisAuth: string,
  reloadTime: number,
  partition: number,
  kafkaEndpoint: string,
  logTopic: string,
  loadFromLocal: boolean,
  azureConfig: AzureType,
}

// eslint-disable-next-line import/prefer-default-export
export { ConfigType, AzureType };
