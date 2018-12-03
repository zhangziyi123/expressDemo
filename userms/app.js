var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();
var index = require('./routes/index');
var users = require('./routes/users');
var upload = require('./routes/upload');
var note = require('./routes/note/note');
var redis = require('redis');
var client = redis.createClient('6379', '127.0.0.1');
var jwtUnit = require('./public/util/jwtUtil');
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
global.jwtTokenSecret = "firstguy"; // 设置加密用的密钥
global.redisClient = client; // 将这个作为全局对象，这样就不用每个地方引用，因为担心其配置改变会导致大量需要修改的地方
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());


app.use(express.static(path.join(__dirname, 'public')));
app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    // res.header("Access-Control-Allow-Credentials", "true"); // 处理cookie信息，如果有，并且不对每次请求都新开一个session
    res.header("Access-Control-Allow-Headers", "X-Requested-With,token, autoken");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1');
    res.header("Cache-Control", 'no-store'); // 缓存
    res.header("Content-Type", "application/json;charset=utf-8");

    // 个别接口可以不带token进行请求
    // TODU： 待优化
    if (req.originalUrl.indexOf('users/login') > -1 || req.originalUrl.indexOf('static') > -1) {
        next();
    } else {
        var tk = req.headers.autoken || "";
        if (tk) {
            jwtUnit.isTokenOverdue(tk, global.jwtTokenSecret, client, function (result) {
                if (result === null) {
                    res.send('redis error', 500);
                } else if (result.overdue) {
                    res.send({sucess: false, msg: 'Access token has expired'});
                } else {
                    next();
                }
            });
        } else {
            res.send('token is required', 401);
        }
    }
});
app.use('/', index);
app.use('/users', users);
app.use('/uploadfile', upload);
app.use('/note', note);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

// http://localhost:3000/swagger/index.html
app.use('/static', express.static(path.join(__dirname, 'public')));

module.exports = app;
