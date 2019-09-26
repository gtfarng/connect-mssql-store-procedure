var express = require('express');
var app = express();
var sql = require("mssql");
// config for your database
var config = {
 user: 'nu',
 password: 'Nu@budHosp2017',
 server: '192.168.50.61', 
 database: 'AppointOnline' 
 };
 
app.get('/', function (req, res) { 
 
 // connect to your database
 sql.connect(config, function (err) {
 
 if (err) console.log(err);
 
 // create Request object
 var request = new sql.Request();
 
 // query to the database and get the data
 request.query('select * from dbo.Appoint4Online', function (err, recordset) {
 
 if (err) console.log(err)
 
 // send data as a response
 res.send(recordset);
 
 });
 });
});
 
var server = app.listen(4000, function () {
 console.log('Server is running.. on Port 4000');
});