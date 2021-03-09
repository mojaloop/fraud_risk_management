# This is a example project to demostrate the capabilities of Arango DB in the Actio Platform.

## Compiling example historical data
You can run `npm run start:historicaldata` to compile the example `historical-data.csv` file into two files: `demo-docs.json` which is the collection with ILPS and `demo-transactions.json`, which is the file with all the transactions.  

If you don't want to compile the files, they have already been added in the repository so you can import them directly into the database.

## Compiling bulk data
You can run `npm run start:json` to compile FCA data. You'll need to paste the csv file in this folder and rename it to `data.csv`. Running this process will output `ILPS.json` which is the collection with ILPS and `new-transfers.json`, which is the file with all the transactions.

Please note that this compilation will probably take from 15 to 45 minutes due to the high amount of data.

If you don't desire to compile it, these files are available in the documentation in the ArangoDB setup section in the [Selection of Graph database document](https://lextego.atlassian.net/wiki/spaces/ACTIO/pages/edit-v2/193626233)

## Running co-located parties rule engine
you'll need to add an `env` file. Check the `env-template` for an example. Make sure you already have the data added into your database before proceeding.

To run the project, run `npm start` to run the example ILP. The engine will process all the transactions for the given ILP. If you want to try another ILP, you can do so by passing it as a param with `npm start my-ilp-id`.

Note that the engine is running a 2 level graph validation since the example ILP(docs/g.tz.fsp001.msisdn.2558617728568) doesn't have a third level of connectivity down to the original sender. there's no other ILP who has this level of connectivity, so if you want to try a deeper level, you'll need to add the data yourself. For now, the example ILP has a 2 level of connectivy to the original ILP. This is noted in the query during the `2..2` level of connectivity. to test the ideal co-located parties query, add the correct data and change the query to `3..3`.