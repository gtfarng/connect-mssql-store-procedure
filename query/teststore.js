const express = require('express')
const app = express()
const router = express.Router();
const cors = require('cors')
const bodyParser = require('body-parser')
const sql = require("mssql");

let config = require('./config.js');
// config for your database

app.use(cors())
app.use('/api', bodyParser.json() ,router)
app.use('/api', bodyParser.urlencoded({extended:false}) ,router)


/* 
app.get('/', function (req, res) { 
 
 // connect to your database
 sql.connect(config, function (err) {
 
 if (err) console.log(err);
 
 // create Request object
 var request = new sql.Request();
 
 // query to the database and get the data
 request.query('select * from dbo.Appoint4Online', function (err, DoctorListDetails) {
 
 if (err) console.log(err)
 
 // send data as a response
 res.send(DoctorListDetails);
 
 });
 });
});
*/


app.get('/api/DoctorListDetails', function (req, res) { 
 
 // connect to your database
 sql.connect(config, function (err) {
 
 if (err) console.log(err);
 
 // create Request object
 var request = new sql.Request();
 
 // query to the database and get the data
 request.execute('dbo.DN_DoctorListDetalis', function (err, DoctorListDetails) {
 
 if (err) console.log(err)
 
 // send data as a response
 res.send(DoctorListDetails);
 
 });
 });
});
 
var server = app.listen(8005,  ()=> {
 console.log('Server is running.. on Port 8005');
});