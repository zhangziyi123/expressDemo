/**
 * @author: zhang@glondon.com
 * @description:
 * @Date: 2018/11/2 21:31
 */
var db = {};
db.query = function (sql, client, callback) {
    var result = {};
    result.success = false;
    if (sql) {
        client.query(sql, function (err, dataInfo) {
            if (err) {
                result.success = false;
                result.msg = err;
                callback && callback(result);
            } else {
                result.success = true;
                result.rows = dataInfo.rows;
                callback && callback(result);
            }
        })
    } else {
        result.success = false;
        callback && callback(result);
    }
}

module.exports = db;
