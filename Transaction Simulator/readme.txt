This is a sample Producer, used to upload any file in the /watch folder to the configured Kafka endpoint. 
When running, it also starts a message window where you can input any raw text, which will also be uploaded 
to the kafka endpoint. 

To get going:
Run "npm i"
Then:
*   To debug, run: "npm run start:dev" - this will compile and run the .ts files, also start a file watcher to recompile as changes 
    are made to any .ts files
*   To do prod build, run: "npm build" - this will clear, then create, all .js files in the /build subfolder
*   To run prod build, run: "npm run start"

Other handy commands - while debugging, if you want the app to reload, just type "rs" in the terminal, this will trigger a restart. 
