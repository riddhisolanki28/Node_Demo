const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getMultiple() {
    console.log('inside getmultiple-----');
  const rows = await db.query(
    'SELECT * from store' 
  );
  console.log('rows-----',rows);
  const data = helper.emptyOrRows(rows);

  return {
    data,
  }
}

module.exports = {
  getMultiple
}