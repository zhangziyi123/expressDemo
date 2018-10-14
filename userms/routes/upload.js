/**
 * @author: zhang@glondon.com
 * @description:
 * @Date: 2018/10/10 20:48
 */
var express = require('express');
var router = express.Router();
var fs = require("fs");//操作文件
var multer = require('multer');//接收图片
var app = express();
var fsUtil = require("../public/util/fsUtil");

// 图片路径根据用户的id存在resource先对应userid的文件夹下
var upload = multer({
    dest: './uploads'
}) // 定义图片上传的临时目录

router.post('/uploads', upload.array('file', 5), function (req, res, next) {
    // req.files 是前端表单name = 'file'的多个文件信息（数组）， 限制数量5
    for (var i = 0; i < req.files.length; i++) {
        // 图片会放在uploads目录并且没有后缀，需要自己转存，用到fs模块
        // 对临时文件转存 fs.rename(oldPath, newPath, callback);
        fs.rename(req.files[i].path, "resource/upload/" + req.files[i].originalname, function (err) {
            if (err) {
                throw error;
            }
            console.log('done');
        })
    }
    res.send(JSON.stringify(req.files) + JSON.stringify(req.body));
})

// 单域单文件上传input[file]的multiple != "multiple"
router.post('/upload', upload.single('file'), function (req, res, next) {
    // req.file是前端表单name="file" 的文件信息（不是数组）
    var tk = req.headers.autoken || "";
    if (tk) {
        var decoded = jwt.decode(tk, global.jwtTokenSecret);
        // 这里需要判断token再日期上是否过期
        // 将判断token是否过期的方法设置为一个全局方法
        if(decoded) {
            fs.rename(req.file.path, "resource/upload/" + req.file.originalname, function (err) {
                if (err) {
                    throw err;
                }
                console.log("上传成功!");
            })
            res.send(JSON.stringify(req.file) + JSON.stringify(req.body))
            res.send({success: true, msg: '请求头缺少autoken值'})
        }
        console.log(decoded);
    } else {
        res.send({success: false, msg: '请求头缺少autoken值'})
    }
});

router.get('/getImg', function (req, res, next) {
    fsUtil.dirExists("uploads/changeimge")
    res.send("done")
})

module.exports = router;