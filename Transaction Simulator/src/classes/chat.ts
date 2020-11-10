import * as kafka from 'kafka-node';
import * as readline from 'readline'

export class Chat {
    sendMessage(message: any, producer: kafka.Producer) {
        return new Promise(resolve => {
            producer.send([{ topic: 't1', messages: [message], partition: 0 }], function (err, data) {

                if (err)
                    console.log('Sending message failed with error: ' + err);
                //else
                //console.log('Successfully sent message: ' + data);
                resolve(message)
            });
        });
    }

    sendChatMessage(rl: readline.Interface, producer: kafka.Producer) {
        return new Promise(resolve =>
            rl.question("Enter message:", function (msg) {
                producer.send([{ topic: 't1', messages: [msg], partition: 0 }], function (err, data) {

                    if (err)
                        console.log('Sending message failed with error: ' + err);
                    //else
                    //console.log('Successfully sent message: ' + data);
                });
                resolve(msg)
            }));
    }
}