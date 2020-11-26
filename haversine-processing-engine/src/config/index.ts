import path from 'path';
import { config as dotenv } from 'dotenv';

import { kafkaType } from '../constants';

// Load .env file into process.env if it exists. This is convenient for running locally.
dotenv({
    path: path.resolve(__dirname, '../../.env')
});

const config: kafkaType = {
    kafkaEndpoint: <string>process.env.KAFKA_ENDPOINT,
    topic: <string>process.env.TOPIC,
    partition: parseInt(<any>process.env.PARTITION),
    autoCommit: <any>process.env.AUTO_COMMIT,
}

export default config
