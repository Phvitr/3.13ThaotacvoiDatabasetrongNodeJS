const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database:'dbTest',
    charset: 'utf8_general_ci',
});

    connection.connect(function (err){
        if (err) {
            throw err.stack;
        }
        else {
            console.log('connection success');
            const sql = "create table customer (id int not null primary key auto_increment, name varchar(30) not null, address varchar(30))";
            connection.query (sql, function (err,){
                if (err) {
                    console.log(err);
                }
                console.log('table created');
                connection.end();
            });

        }
    })
