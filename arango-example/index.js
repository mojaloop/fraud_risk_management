const fs = require('fs');
const readline = require('readline');

function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}

const rs = fs.createReadStream('data.csv');
const rl = readline.createInterface({ input: rs });
const names = [];
(async () => {
	console.time(__filename);
  fs.writeFile('new-transfers.json', `[`, (err) => {
    if (err) {
        throw err;
    }
  });
	for await (const line of rl) {
    const newObj = Object.assign({}, line.split(","));
    const transferId = newObj[1].replace(/"/g,"");
    const payerILPName = `${newObj[18]}.msisdn.${newObj[24]}`.replace(/"/g,"")
    const payeeILPName = `${newObj[35]}.msisdn.${newObj[41]}`.replace(/"/g,"")
    const transfer = {};
    transfer["_key"] = transferId;
    transfer["_id"] = `transfers/${transferId}`;
    transfer["_from"] = `ILPS/${payerILPName}`;
    transfer["_to"] = `ILPS/${payeeILPName}`

    names.push(payerILPName, payeeILPName)
    fs.appendFile('new-transfers.json', `${JSON.stringify(transfer)},`, (err) => {
      if (err) {
          throw err;
      }
    });

	}

  var uniqueILPS = names.filter(onlyUnique);
  const ILPS = uniqueILPS.map(name => ({_key: name, _id: `ILPS/${name}`}))
  fs.writeFile('ILPS.json', JSON.stringify(ILPS), (err) => {
    if (err) {
        throw err;
    }
  });
	console.timeEnd(__filename);
})();