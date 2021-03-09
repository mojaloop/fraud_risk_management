const fs = require('fs');
const readline = require('readline');
const csv = require('csvtojson');

function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}

const csvFilePath = 'historical-data.csv';
const names = [];
const transfers = [];

(async () => {
  const historicalData = await csv().fromFile(csvFilePath);
    for (i = 0; i < historicalData.length; i++) {
      transfers.push({
        _key: historicalData[i].TransactionID,
        _id: `transactions/${historicalData[i].TransactionID}`,
        _from: `docs/${historicalData[i].ILPSourceAccountAddress}`,
        _to: `docs/${historicalData[i].ILPDestinationAccountAddress}`,
        ...i
      });
      names.push(historicalData[i].ILPSourceAccountAddress);
      names.push(historicalData[i].ILPDestinationAccountAddress);
    }
    var uniqueNames = names.filter(onlyUnique);
    const docs = uniqueNames.map(name => ({_key: name, _id: `docs/${name}`}))
  fs.writeFile('demo-docs.json', JSON.stringify(docs), (err) => {
    if (err) {
        throw err;
    }
  });
  fs.writeFile('demo-transactions.json', JSON.stringify(transfers), (err) => {
    if (err) {
        throw err;
    }
  });

})();