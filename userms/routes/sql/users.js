/**
 * @author: zhang@glondon.com
 * @description: 封装各个模块对数据库的操作
 * @Date: 2018/2/28 22:53
 */
var db = {};
db.query = function (sql, client, callback) {
    var result = {};
    result.success = false;
    if (sql) {
        client.query(sql, function (err, dataInfo) {
            if (err) {
                console.log('获取数据失败');
                return;
            }
            console.log('获取数据成功');
            result.success = true;
            result.rows = dataInfo.rows;
            result.fields = dataInfo.fields;
            callback && callback(result);
        })
    } else {
        result.success = false;
        callback && callback(result);
    }
}

module.exports = db;
