const mysql = require('mysql2');
const buffer = require("buffer");

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'dbTest',
    charset: 'utf8_general_ci',
});

connection.connect(function (err) {
    if (err) throw err.stack;
    else {
        console.log('connect successfully');
    }
});

const sqlSelect = 'call getAll();';
connection.query(sqlSelect, (err, results, field) => {
    if (err) throw err;
    console.log(results, 'select');
});

const sqlWhere = 'call getAllFromHoThuyEnQuang();';
connection.query(sqlWhere, (err, results, field) => {
    if (err) throw err;
    console.log(results, 'where');
});

const sqlLimit = 'call getAllLimit3();';
connection.query(sqlLimit, (err, results, field) => {
    if (err) throw err;
    console.log(results, 'limit');
});

const data = Buffer.concat(buffer).toString();
const userData = JSON.parse(data);
const sqlSet = `call updateCustomerById('${userData.id},'${userData.address}');`;
connection.query(sqlSet, (err, results, field) => {
    if (err) throw err;
    console.log(results, 'set')
})

