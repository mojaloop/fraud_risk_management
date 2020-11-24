import { Consumer } from "./base-classes/consumer";
import { AppConfiguration } from "read-appsettings-json";
import { Redis } from "./redis/redis";
import { Consumers } from "./base-classes/consumers";
import { PartyConsumer } from "./consumer/party.consumer";
import { AccountLookupConsumer } from "./consumer/account-lookup.consumer";
import { QuoteConsumer } from "./consumer/quote.consumer";
import { TransferConsumer } from "./consumer/transfer.consumer";

let redis = new Redis();
// Prepare Redis with some sample data
redis.Initialize().then(() => {
    console.log('Data preperation complete.');

    // Create a consumer for each configured Kafka topic. 
    AppConfiguration.Setting().topics.forEach((topic: string) => {
        let consumer: Consumer;
        switch ((<any>Consumers)[topic]) {
            case Consumers.parties:
                consumer = new PartyConsumer(topic);
                break;
            case Consumers.accountlookups:
                consumer = new AccountLookupConsumer(topic);
                break;
            case Consumers.quotes:
                consumer = new QuoteConsumer(topic);
                break;
            case Consumers.transfers:
                consumer = new TransferConsumer(topic);
                break;
            default:
                throw new Error('Unknown consumer: ' + topic);
        }
        consumer.Start(redis);
    });
});