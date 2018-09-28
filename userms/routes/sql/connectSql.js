/**
 * @author: zhang@glondon.com
 * @description:
 * @Date: 2018/2/27 22:40
 */

var conString = "postgres://postgres:admin@localhost/userms";
var pg = require('pg');
var client = new pg.Client(conString);
if (client.readyForQuery) {
    console.log("数据库已经连接");
} else {
    client.connect(function (error, results) {
        if (error) {
            console.log('ClientConnectionReady Error: ' + error.message);
            client.end();
            return;
        }
        console.log('Connecting to postgres...');
    });
}


module.exports = client;