/**
 * @author: zhang@glondon.com
 * @description: 封装各个模块对数据库的操作
 * @Date: 2018/2/28 22:53
 */
var db = {};
var pg = require('pg');

var conString = "postgres://postgres:admin@localhost/userms";
var client = new pg.Client(conString);

db.query = function (sql, callback) {
    var result = {};
    result.success = false;
    if (client.readyForQuery) {
        console.log("数据库已经连接");
    } else {
        client.connect(function (error, results) {
            if (error) {
                console.log('ClientConnectionReady Error: ' + error.message);
                client.end();
                return;
            } else {
                // var result = {};
                console.log('connect success');
                console.log(sql);
                if (sql) {
                    client.query(sql, function (err, dataInfo) {
                        if (err) {
                            console.log('获取数据失败');
                            client.end();
                            return;
                        }
                        console.log('获取数据成功');
                        result.success = true;
                        result.rows = dataInfo.rows;
                        result.fields = dataInfo.fields;
                        client.end();
                        callback && callback(result);
                    })
                } else {
                    result.success = false;
                    client.end();
                    callback && callback(result);
                }
            }
        })
    }


    /*  var result = {};
     result.success = true;
     if (sql) {
     console.log('开始请求数据');
     client.query(sql, function (err, rows, fields) {
     console.log('获取数据成功');
     result.success = true;
     result.rows = rows;
     result.fields = fields;
     client.end();
     })
     } else {
     result.success = false;
     client.end();
     }

     return new Promise(function (resolve, reject) {
     if (result.success) {
     //成功操作,对应 then方法
     resolve(result)
     }
     else {
     //失败操作,对应catch方法
     reject(result)
     }
     })*/
}

module.exports = db;
