# TYPOLOGY REGISTER INGESTION SERVICE

## Description
This service actively listens to updates in a Files Shares folder in Azure. When a new file with the format `typology` is uploaded, this service will read that CSV file and iterate through ILP source and store them in redis.  
Alternatively, it can also upload a sample file stored inside the data folder in the service to facilitate a local run.


## How to run
Run `npm i`
Then:
*   To debug, run: "npm run start:dev" - this will compile and run the .ts files, also start a file watcher to recompile as changes 
    are made to any .ts files
*   To do prod build, run: "npm build" - this will clear, then create, all .js files in the /build subfolder
*   To run prod build, run: "npm run start"
*   To run lint, run: "npm run lint"

Other handy commands - while debugging, if you want the app to reload, just type "rs" in the terminal, this will trigger a restart. 
