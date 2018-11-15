/**
 * @author: zhang@glondon.com
 * @description:
 * @Date: 2018/11/2 21:07
 */
var express = require('express');
var bodyParser = require('body-parser')
var router = express.Router();
var sqlConfig = require('../config/sql/note/note');
var db = require('../sql/common.js');
var sqlObj = require('../sql/connectSql.js');

var app = express()
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}))
// parse application/json
app.use(bodyParser.json())

/*根据用户id分页获取mark，支持全部获取*/
// http://localhost:3000/note/e664e972-2820-43ef-8e55-9e6e5e9d2be0?size=1&index=0
router.get('/:userid', function (req, res, next) {
    // 要判断下是否为数字
    var size = req.query.size !== undefined ? parseInt(req.query.size) : 10;
    var index = req.query.index !== undefined ? parseInt(req.query.index) : 0;
    var userid = req.params.userid;
    var sqlStr = "";
    if (req.query.size) {
        sqlStr = sqlConfig.getNotesByPage.replace("{userid}", userid);
        sqlStr = sqlStr.replace("{index}", index);
        sqlStr = sqlStr.replace("{size}", size);
    } else {
        sqlStr = sqlConfig.getAllNotes.replace("{userid}", userid);
    }

    db.query(sqlStr, sqlObj, function (result) {
        if (result.success) {
            if (result.rows.length > 0) {
                var data = result.rows;
                res.send({success: true, data: data});
            } else {
                res.send({success: true, data: []});
            }
        } else {
            res.send({success: false, message: result.msg});
        }
    })
});

router.post('/create/:userid', function (req, res, next) {
    var noteModel = {};
    noteModel.userid = req.params.userid;
    console.log(req.body);
    noteModel.content = req.body.content || "";
    noteModel.abstract = req.body.abstract || "";
    noteModel.title = req.body.title || "";
    var myDate = new Date();
    var mytime = myDate.toLocaleString(); //获取当前时间
    noteModel.updatetime = mytime;
    if (noteModel.userid && noteModel.title && noteModel.content) {
        var fields = "(userid, title, content, abstract)";
        var modelValString = "('" + noteModel.userid + "', '" + noteModel.title + "', "
            + "'" + noteModel.content + "', " + "'"
            + noteModel.abstract + "')";
        var sqlStr = sqlConfig.addNote.replace("{fields}", fields);
        sqlStr = sqlStr.replace("{values}", modelValString);
        db.query(sqlStr, sqlObj, function (result) {
            if (result.success) {
                res.send({success: true});
            } else {
                res.send({success: false, message: result.msg});
            }
        })
    } else {
        res.send({success: false, message: 'title and content can not be null'});
    }
})


module.exports = router;


