const express = require('express')
const app = express()
const router = express.Router();
const cors = require('cors')
const bodyParser = require('body-parser')
const sql = require("mssql");

const config = require('./config.js');

app.use(cors())
app.use('/api', bodyParser.json(), router)
app.use('/api', bodyParser.urlencoded({ extended: false }), router)

app.get('/api', (req, res)=>{    res.send(`<html><h1>Welcome To APIs - DoctorNote</h1></html>`)    });
 
app.get('/api/DoctorListDetails',  (req, res) =>{

    // connect to your database
    sql.connect(config,  (err) =>{

        if (err) console.log(err);

        // create Request object
        const request = new sql.Request();

        // query to the database and get the data
        request.execute('dbo.DN_DoctorListDetalis',  (err, DoctorListDetails) =>{
            console.log(DoctorListDetails)
            if (err) console.log(err)

            // send data as a response
            res.send(DoctorListDetails);
            sql.close()

        });

    });
});




app.listen(8005, () => {   console.log('Server is running.. on Port 8005');});