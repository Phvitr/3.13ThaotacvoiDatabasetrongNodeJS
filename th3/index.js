const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user : 'root',
    password : '1234',
    database : 'dbTest',
    charset : 'utf8_general_ci',
});

connection.connect(function (err){
    if (err) {
        throw err.stack;
    }
    else {
        console.log('connect success');
        const sqlCreate = 'call createTable();';
        connection.query(sqlCreate, function (err,result){
            if (err) throw err;
            else console.log('table created successfully',result)
        });
        const sqlDelete = 'call deleteTable();';
        connection.query(sqlDelete, function (err,result) {
            if (err) throw err;
            else console.log('table deleted successfully', result)
        });
        const sqlAlter = 'call alterTable();';
        connection.query(sqlAlter, function (err,result) {
            if (err) throw err;
            else console.log('table created successfully', result)
        });
    }
})


