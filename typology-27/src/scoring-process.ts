import async from 'async';
import * as kafka from 'kafka-node';
import { RedisClient } from 'redis';
import { config } from './config/config';
import { log } from './helper';
import { publish } from './producer';
import handleRecentPasswordReset from './rules/recentPasswordReset';
import handleSimSwap from './rules/recentSimSwap';

// Composed probability for typology 27 = (009.p)*(012.p)*(014.p+018.p+030.p+032.p+078.p)
const handleScores = (scores: Map<number, boolean>) => {
  const score =
    (scores.get(9) ? 1 : 0)
      * (scores.get(12) ? 1 : 0)
      * (
          (scores.get(14) ? 0.2 : 0) 
          + (scores.get(18) ? 0.2 : 0) 
          + (scores.get(30) ? 0.2 : 0) 
          + (scores.get(32) ? 0.2 : 0) 
          + (scores.get(78) ? 0.2 : 0)
        );
}

const handleQuoteMessage = async (
  message: kafka.Message,
  topic: string,
  client: RedisClient,
) => {
  const jMessage = JSON.parse(message.value.toString());
  let scores = new Map<number, boolean>();
  // TODO: WRITE SOME LOGIC TO RUN RULES AND EVALUTE THEIR RESULTS. 

  const msgQueue = async.queue((task, callback) => {
    callback();
  }, config.maxParallelHandles);

  msgQueue.drain(() => {
    handleScores(scores);
  });

  msgQueue.push(async () => {
    // Rule 14
    let passwordReset = await handleRecentPasswordReset(jMessage);
    scores.set(14, passwordReset);
  })
  msgQueue.push(async () => {
    // Rule 9
    var simSwap = await handleSimSwap(jMessage, client);
    scores.set(9, simSwap);
  })


  // await publish(topic, `[${TransactionID}][IsCashWithdraw][${topic}][${isCashWithdraw}] Transaction: ${TransactionID} from ${ILPSourceAccountAddress} is ${(isCashWithdraw) ? '' : 'not '}a cash withdraw`);
};


export default handleQuoteMessage;
