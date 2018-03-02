var express = require('express');
var router = express.Router();
var sqlObj = require('./sql/connectSql.js');
var db = require('./sql/users.js');
/* GET users listing. */
router.get('/user', function (req, res, next) {
    res.send('respond with a resource');
});

/* 登录接口 */
router.get('/login', function (req, res, next) {
    var args = req.query;
    var name = req.query.name;
    var password = req.query.password;
    db.query("select * from user_tb", sqlObj, function (result) {
        var flag = false;
        var message = "";
        if (result.success) {
            for (var i = 0; i < result.rows.length; i++) {
                if (result.rows[i].name.toString() === name && result.rows[i].password.toString() === password) {
                    flag = true;
                    break;
                }

                if (result.rows[i].name.toString() === name && result.rows[i].password.toString() !== password) {
                    message = "密码错误!";
                }
            }
        }
        if (flag) {
            res.send({success: true});
        } else {
            if (message === "") {
                message = "用户名不存在!";
            }
            res.send({success: false, message: message});
        }
    })
});

module.exports = router;


/* console.log('get请求参数对象 :', req.query);
 console.log('post请求参数对象 :', req.body);
 console.log('q的值为 :', req.query.q);*/