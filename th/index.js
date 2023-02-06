const mysql = require('mysql2');
const http = require('http');
const qs = require('qs');
const url = require('url');


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'dbTest',
    charset: 'utf8_general_ci'
});

connection.connect(function (err) {
    if (err) {
        throw err.stack;
    }
    else
        console.log("connect success");
});

const server = http.createServer(async (req, res) => {
    try {
        if (req.url === "/user" && req.method === "POST") {
            const buffer = [];
            for await (const chunk of req) {
                buffer.push(chunk);
            }
            const data = Buffer.concat(buffer).toString();
            const userData = JSON.parse(data);
            const sql = `call addCustomer('${userData.name}','${userData.address}')`;
            connection.query(sql, (err, result, fields) => {
                if (err) throw err;
                res.end('success');
            });
        }
    } catch (err) {
        return res.end(err.message);
    }
});

server.listen(8080, () => {
    console.log('server is running on port 8080');
})