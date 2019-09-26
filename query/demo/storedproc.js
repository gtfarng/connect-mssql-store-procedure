let mssql = require('mssql');
let config = require('./config.js');
 
let connection = mssql.createConnection(config);
 
let sql = `CALL dbo.DN_Diag(?)`;
 
connection.query(sql, true, (error, results, fields) => {
  if (error) {
    return console.error(error.message);
  }
  console.log(results[0]);
});
 
connection.end();