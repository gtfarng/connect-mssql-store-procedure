const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const sql = require("mssql");

const config = require('./config.js');

const app = express()
const router = express.Router();

app.use(cors())
app.use('/api', bodyParser.json(), router)
app.use('/api', bodyParser.urlencoded({ extended: true }), router)

app.get('/api', (req, res)=>{    res.send(`<html><h1>Welcome To APIs - DoctorNote</h1></html>`)    });
 
app.get('/api/DoctorListDetails',  (req, res) =>{

    // connect to your database
    sql.connect(config,  (err) =>{

        if (err) console.log(err);

        // create Request object
        const request = new sql.Request();

        // query to the database and get the data
        request.execute('dbo.DN_DoctorListDetalis',  (err, recordset) =>{
           // console.log(recordset)
           console.log('.GET :/api/DoctorListDetails')
            if (err) console.log(err)

            // send data as a response
            res.send(recordset);
            sql.close()

        });

    });
     
});


app.post('/api/test',  (req, res)=> {
    var hn = req.body.hn;
   
   
    sql.connect(config,  (err) =>{

        if (err) console.log(err);
        // create Request object
        let request = new sql.Request();
    
        // query to the database and execute procedure
        request.query("exec dbo.DN_Diag @HN='"+hn+"'",  (err, recordset)=> {
            console.log('.POST :/api/Test')
            if (err) console.log(err);

            res.send(recordset);
            sql.close()
        });
    });
    
});

app.post('/api/login',function(req,res){
  var user_name=req.body.user;
  var password=req.body.password;
  console.log("User name = "+user_name+", password is "+password);
  res.end("yes");
});






app.listen(8005, () => {   console.log('Server is running.. on Port 8005');});