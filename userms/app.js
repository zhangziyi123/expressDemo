var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var RedisStore = require('connect-redis')(session);  //定义redisStore

var app = express();

var index = require('./routes/index');
var users = require('./routes/users');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

app.use(session({
    // name: "sessionID", // 设置 cookie 中保存 session id 的字段名称
    store: new RedisStore({
        host: '127.0.0.1',		       //redis服务器地址, 这里用本机代替
        port: 6379,              //自定端口
        ttl: 1800 // 过期时间秒 Redis session TTL 过期时间 （秒）
        //“pass”: redis_config.password  //如果有密码，就自己填进去
    }),
    resave: false, // don’t save session if unmodified
    cookie: {
        secure: false, // 是否每次请求都重新生成session的问题
        maxAge: 1800000
    },
    saveUninitialized: true, // 是否将session存储到内存中。是否设置session在存储容器中可以给修改
    secret: 'keyboard cat' // 通过设置 secret 来计算 hash 值并放在 cookie 中，使产生的 signedCookie 防篡改
}));

app.use(express.static(path.join(__dirname, 'public')));
app.all('*', function (req, res, next) {
    /*res.header("Access-Control-Allow-Origin", "*");*/
    res.header("Access-Control-Allow-Origin", "http://localhost:8086");
    res.header("Access-Control-Allow-Credentials", "true"); // 处理cookie信息，如果有，并且不对每次请求都新开一个session
    res.header("Access-Control-Allow-Headers", "X-Requested-With,token, autoken");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1');
    res.header("Cache-Control", 'no-store'); // 缓存
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});
app.use('/', index);
app.use('/users', users);

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


module.exports = app;
