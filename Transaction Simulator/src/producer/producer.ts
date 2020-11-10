import * as fs from 'fs';
import * as kafka from 'kafka-node';
import { rawListeners } from 'process';
import { AppConfiguration } from "read-appsettings-json";
import * as readline from 'readline'
import { Chat } from '../classes/chat';
import { FileWatcher } from '../classes/file-watcher';

export class Producer {

    constructor() {

    }

    Start() {
        console.log('Starting producer');
        try {
            const rl = readline.createInterface({
                input: process.stdin,
                output: process.stdout
            });

            let kafkaHost = AppConfiguration.Setting().kafkaEndpoint;
            let ready = false;
            let watchDir = "./watch";
            let processedDir = "./done";
            let client = new kafka.KafkaClient({
                kafkaHost: kafkaHost
            });
            console.log('Connecting to host: ' + kafkaHost);
            let producer = new kafka.Producer(client, {});
            let km = new kafka.KeyedMessage('key', 'message');

            let chat = new Chat();
            producer.on('ready', async function () {
                console.log('Ready!');
                ready = true;
                // producer.send(payloads, function (err, data) {
                //     if (err)
                //         console.log('Broker update failed with message: ' + err);
                //     else
                //         console.log('Broker update succeeded with message: ' + data);
                // });

                // Start watcher
                let watcher = new FileWatcher("./watch", "./done");

                watcher.on("process", function process(file) {
                    const watchFile = watchDir + "/" + file;
                    const processedFile = processedDir + "/" + file;

                    fs.readFile(watchFile, async function (error: any, data: any) {
                        if (error)
                            console.log('Error while reading contents of file with message: ' + error);
                        else if (data)
                            await chat.sendMessage(data, producer);
                        else
                            console.log('No contents in the file.');

                        fs.rename(watchFile, processedFile, function (err) {
                            if (err) throw err;
                        });
                    });

                });

                watcher.start();

                // Chat handler
                while (true) await chat.sendChatMessage(rl, producer);
            });

            producer.on('error', function (err) { console.log('Error received from server with details: ' + err) })

            console.log('Started producer.');
        } catch (e) {
            console.log('Unhandled exception with details: ' + e);
        }
    }
}