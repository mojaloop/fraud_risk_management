require('dotenv').config();
const { Database, aql } = require("arangojs");

async function main() {
  const db = new Database({
    url: process.env.DATABASE_URL,
    databaseName: process.env.DATABASE_NAME,
    auth: {
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD
    }
  });
  const ILP = process.argv[2] ? process.argv[2] : process.env.EXAMPLE_ILP;

  try {
    const ILPList = await db.query(aql`
      FOR v, e, p IN 2..2 OUTBOUND
      ${ILP}
      GRAPH 'demo-transactions'
      FILTER e._to == ${ILP}
      RETURN e
    `);
    const length = ILPList._batches._batches.length;
    console.log('transactions: ', length)
    length > 8
      ? console.log('Colocated parties rule result is TRUE')
      : console.log('Colocated parties rule result is FALSE')
  } catch (err) {
    console.error(err.message);
  }
}

main();