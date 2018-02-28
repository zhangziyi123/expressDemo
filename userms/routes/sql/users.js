/**
 * @author: zhang@glondon.com
 * @description: 封装各个模块对数据库的操作
 * @Date: 2018/2/28 22:53
 */
var db = {};
var pg = require('pg');
/*var conString = "postgres://postgres:admin@localhost/userms";
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
});*/

db.query = function(sql) {

    return new Promise(function(resolve, reject) {
        if (sql < 100) {
            //成功操作,对应 then方法
            resolve("success")
        }
        else {
            //失败操作,对应catch方法
            reject('error')
        }
    })
}

module.exports = db;
