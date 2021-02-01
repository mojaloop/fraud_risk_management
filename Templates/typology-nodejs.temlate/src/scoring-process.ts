import * as kafka from "kafka-node";
import { RedisClient } from "redis";

import * as redis from "./redis-client";
import rules from "./rules";

import { log } from "./helper";
import { publish } from "./producer";
import { typology<!TypologyNumber!>Score } from "./typology-score";

// TODO: Please add link to the ACTIO issue for the typology's scoring
// https://lextego.atlassian.net/browse/ACTIO-###
const handleScores = (
    scores: typology<!TypologyNumber!>Score,
    topic: string,
    TransactionID: string,
    transactionDate: string
) => {
    // Assign the rules the relevant scores
    // Remember the total score of a typology needs to be between 0 and 1, 1 being all rules flagged as true
    const score = 
      (scores.ruleX ? 0.5 : 0) +
      (scores.ruleY ? 0.5 : 0);

    publish(
        topic,
        `"typology":"typology-<!TypologyNumber!>","transactionID":"${TransactionID}","score":${score},"createDate":${transactionDate},"processedDate":${Date.now()},"textResult":"Typology <!TypologyNumber!> score is ${score}, Reason: ${
            (scores.ruleX ? "Rule X, " : "") +
            (scores.ruleY ? "Rule Y, " : "") +
            '"}'
        }`
    );
};

const handleQuoteMessage = async (
    message: kafka.Message,
    topic: string,
    senderClient: RedisClient,
    receiverClient: RedisClient
) => {
    try {
        const transfer = JSON.parse(message.value.toString());

        // Below is just an example of different resources required to process the rules required for your typology
        const {
            TransactionID,
            ILPSourceAccountAddress,
            ILPDestinationAccountAddress,
            HTTPTransactionDate,
        } = transfer;

        const sourceHistoricalReceiveDataJSON = await redis.get(
            receiverClient,
            ILPSourceAccountAddress
        );

        const sourceHistoricalSendDataJSON = await redis.get(
            senderClient,
            ILPSourceAccountAddress
        );

        const payeeHistoricalReceiveDataJSON = await redis.get(
            receiverClient,
            ILPDestinationAccountAddress
        );

        const payeeHistoricalSendDataJSON = await redis.get(
            senderClient,
            ILPDestinationAccountAddress
        );

        const sourceHistoricalReceivedData = JSON.parse(
            sourceHistoricalReceiveDataJSON
        );
        const sourceHistoricalSendData = JSON.parse(
            sourceHistoricalSendDataJSON
        );
        const payeeHistoricalSendData = JSON.parse(payeeHistoricalSendDataJSON);
        const payeeHistoricalReceiveData = JSON.parse(
            payeeHistoricalReceiveDataJSON
        );

        const scores: typology<!TypologyNumber!>Score = new typology<!TypologyNumber!>Score();

        try {
            scores.ruleX = rules.hasRuleXName(transfer);
        } catch (error) {
            // Replace the below RuleXName with the name of the rule that is needed for the typology
            log(
                `Error while handling RuleXName for ${TransactionID}, with message: \r\n${error}`,
                topic
            );
        }
        try {
            scores.ruleY = rules.hasRuleYName(transfer);
        } catch (error) {
            // Replace the below RuleYName with the name of the rule that is needed for the typology
            log(
                `Error while handling RuleYName for ${TransactionID}, with message: \r\n${error}`,
                topic
            );
        }

        handleScores(scores, topic, TransactionID, HTTPTransactionDate);
    } catch (e) {
        console.error(e);
    }
};

export default handleQuoteMessage;
