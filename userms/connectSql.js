/**
 * @author: zhang@glondon.com
 * @description:
 * @Date: 2018/2/27 22:40
 */

/*
var pg = require('pg');
// var conString = "postgres://postgres:admin@localhost/userms";
var conString = "tcp://postgres://postgres:admin@localhost:5432/userms";
var client = new pg.Client(conString);
client.connect(conString, function (err, client, done) {

    if (err) {
        return console.error('error fetching client from pool', err);
    }
    client.query('SELECT $1::int AS number', ['1'], function (err, result) {
        done();
        if (err) {
            return console.error('error running query', err);
        }
        console.log(result.rows[0].number);
    });

});
*/

var pg = require('pg');

var conString = "postgres://postgres:admin@localhost/userms";
var client = new pg.Client(conString);

client.connect(function(error, results) {
    if(error){
        console.log('ClientConnectionReady Error: ' + error.message);
        client.end();
        return;
    }
    console.log('Connecting to postgres...');
    console.log('Connected to postgres automatically.');
    console.log('connection success...\n');
});
