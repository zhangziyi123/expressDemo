/**
 * @author: zhangziyi-k@glondon.com
 * @description:
 * @Date: 2018/10/14 19:53
 */
/*
 * 判断token是否过期
 * */
var jwt = require('jwt-simple');
var jwtUtil = {
    isTokenOverdue: function (token, secret, redisClient, callback) {
        var backMsg = {
            overdue: false,
            msg: ""
        }
        var decoded = jwt.decode(token, global.jwtTokenSecret);
        if (decoded && decoded.iss) {
            redisClient.get(decoded.iss, function (err, userInfo) {
                var expTime = decoded && decoded.exp ? decoded.exp : 0;
                var userInfoObj = userInfo ? JSON.parse(userInfo) : "";
                if (err) {
                    backMsg = null;
                } else if (userInfoObj.token !== token) {
                    backMsg.overdue = true;
                    backMsg.msg = ''; // token过期
                } else if (expTime && expTime <= Date.now()) {
                    backMsg.overdue = true;
                    backMsg.msg = 'timeout'; // token时间过期
                } else {
                    backMsg.overdue = false;
                    backMsg.msg = userInfoObj;
                }
                callback && callback(backMsg);
            });
        }
    }
}

module.exports = exports = jwtUtil;