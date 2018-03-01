var express = require('express');
var router = express.Router();
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
    /* console.log('get请求参数对象 :', req.query);
     console.log('post请求参数对象 :', req.body);
     console.log('q的值为 :', req.query.q);*/
    if (name === 'zzy' && password === '123') {
        // res.send('登录成功');
    } else {
        // res.send('登录失败');
    }
    db.query("select * from user_tb", function (result) {
        res.send(result);
    })
    /*db.query("select * from user_tb").then(function (result) {
     res.send(result);
     })*/
});

module.exports = router;
