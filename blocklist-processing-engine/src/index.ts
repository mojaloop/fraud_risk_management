//START UP FILE
import { configuration } from './config/config';
import {
    accountLookupConsumer,
    partyConsumer,
    quoteConsumer,
    transferConsumer
} from './consumers';
import { initialize } from './redis-client/redis-client';

initialize().then(() => {
    configuration.topics.forEach(topic => {
        switch (topic) {
            case 'parties':
                partyConsumer(topic, configuration);
                break;
            case 'transfers':
                transferConsumer(topic, configuration);
                break;
            case 'quotes':
                quoteConsumer(topic, configuration);
                break;
            case 'accountlookups':
                accountLookupConsumer(topic, configuration);
                break;
            default:
                break;
        }
    });
});