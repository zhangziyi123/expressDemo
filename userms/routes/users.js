var express = require('express');
var router = express.Router();
var sqlObj = require('./sql/connectSql.js');
var db = require('./sql/users.js');
var token = require('../public/util/token');
/* GET users listing. */
router.get('/user', function (req, res, next) {
    res.send('respond with a resource');
});


/* 登录接口 */
router.get('/login', function (req, res, next) {
    var args = req.query;
    var name = req.query.name;
    var password = req.query.password;
    console.log("login");
    // "select * from user_tb where name='zzy'",
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
/*
 * 保存用户token到session中 ？ 意义？ 用户每次登录的时候就读一次数据库，因为不知道数据库用户信息是否发生改变，这样操作不对吗？
 * 用了token还有必要用session吗
 * */
router.get('/login/:name/:password', function (req, res, next) {
    var params = {
        name: req.params.name || '',
        password: req.params.password || ''
    }
    if (params.name && params.password) {
        var sqlStr = "select * from user_tb where name='" + params.name + "' and password = '" + params.password + "'";
        db.query(sqlStr, sqlObj, function (result) {
            if (result.success) {
                if (result.rows.length > 0) {
                    var data = result.rows[0];
                    var userToken = token.createToken(data.userid);
                    var userInfo = {
                        name: data.name,
                        userid: data.userid,
                        token: userToken
                    }
                    req.session.userInfo = userInfo;
                    res.send({success: true, userInfo: userInfo});
                    // req.session.cookie.token = userToken; // 不能存cookie里面，不然再次请求获取不到值
                } else {
                    res.send({success: true, message: '用户名或密码错误!'});
                }
            } else {
                res.send({success: false, message: 'server error'});
            }
        })
    }
});
/* 修改密码接口 */
router.get('/modify', function (req, res, next) {
    console.log("修改用户信息接口");
    var name = req.query.name;
    var password = req.query.password;
    var newPwd = req.query.newpassword;
})

router.get('/modify/password', function (req, res, next) {
    console.log("修改用户信息接口");
    db.query("update user_tb set password='123' where name='zzy'", sqlObj, function (result) {
        console.log("modify", result);
        res.render('index', {title: 'Hey', message: 'Hello there!'});
        /*      if (result.success) {
         res.send({success: true, message: '修改密码成功!'});
         } else {
         res.send({success: false, message: '修改密码失败!'});
         }*/
    })
})

/* 获取用户详情接口-根据token获取用户详情 */
router.get('/userInfo', function (req, res, next) {
    console.log("sessionID", req.sessionID);
    console.log("sessionToken", req.session);
    var tk = req.headers.autoken || "";
    var userInfo = req.session.userInfo || "";
    var sessionToken = userInfo ? userInfo.token : "";
    console.log("tk", tk);
    res.send({data: userInfo});
    /*    if (tk && tk === sessionToken && token.checkToken(tk)) {
     var userid = userInfo.userid;
     var sqlStr = "select * from user_tb where userid = '" + userid + "'";
     db.query(sqlStr, sqlObj, function (result) {
     if (result.success) {
     if (result.rows.length > 0) {
     var data = result.rows[0];
     res.send({success: true, userInfo: data});
     } else {
     res.send({success: true, message: "没有查询到该用户的详情"});
     }
     } else {
     res.send({success: false, message: 'server error'});
     }
     })
     } else {
     res.send({success: false});
     }*/
})

// 退出登录
router.all('/logout', function (req, res, next) {
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Origin", req.headers.origin);
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    // 备注：这里用的 session-file-store 在destroy 方法里，并没有销毁cookie
    // 所以客户端的 cookie 还是存在，导致的问题 --> 退出登陆后，服务端检测到cookie
    // 然后去查找对应的 session 文件，报错
    // session-file-store 本身的bug

    req.session.destroy(function (err) {
        if (err) {
            res.json({ret_code: 2, ret_msg: '退出登录失败'});
            return;
        }
        var identityKey = 'skey';
        res.clearCookie(identityKey);
        res.json(jsonData(0, null, '退出登录成功'));
    });
});

module.exports = router;


/* console.log('get请求参数对象 :', req.query);
 console.log('post请求参数对象 :', req.body);
 console.log('q的值为 :', req.query.q);*/