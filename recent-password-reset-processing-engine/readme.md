This rules engine will verify if your PIN was recently changed, by subscribing to configured Kafka topics, connect to a Redis 
server to check if a value is in a set and post the result of the "recent-password-reset-processing-engine" to a configured Kafka topic.

To get going:
Run "npm i"
Then:
*   To debug, run: "npm run start:dev" - this will compile and run the .ts files, also start a file watcher to recompile as changes 
    are made to any .ts files
*   To do prod build, run: "npm build" - this will clear, then create, all .js files in the /build subfolder
*   To run prod build, run: "npm run start"

Other handy commands - while debugging, if you want the app to reload, just type "rs" in the terminal, this will trigger a restart. 