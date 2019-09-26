 var Connection = require('tedious').Connection;  
    var config = {  
        server: '192.168.50.61',  //update me
        authentication: {
            type: 'default',
            options: {
                userName: 'nu', //update me
                password: 'Nu@budHosp2017'  //update me
            }
        },
        options: {
            // If you are on Microsoft Azure, you need encryption:
            encrypt: true,
            database: 'AppointOnline'  //update me
        }
    };  
    var connection = new Connection(config);  
    connection.on('connect', function(err) {  
        // If no error, then good to proceed.
        console.log("Connected");  
    });  