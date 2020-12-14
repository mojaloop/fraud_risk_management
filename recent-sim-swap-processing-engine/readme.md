This processing engine will check if the Payer's current Quote transaction has the same ICCID than the last transaction processed.
The engine will subscribe to configured Kafka topics, connect to a Redis server to check the last transaction, then post the 
result to a configured Kafka topic.

To get going:
Run "npm i"
Then:
*   To debug, run: "npm run start:dev" - this will compile and run the .ts files, also start a file watcher to recompile as changes 
    are made to any .ts files
*   To do prod build, run: "npm build" - this will clear, then create, all .js files in the /build subfolder
*   To run prod build, run: "npm run start"

Other handy commands - while debugging, if you want the app to reload, just type "rs" in the terminal, this will trigger a restart. 