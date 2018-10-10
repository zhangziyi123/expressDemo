/**
 * @author: zhang@glondon.com
 * @description:
 * @Date: 2018/10/10 21:34
 */
/**
 * 读取路径信息
 * @param {string} path 路径
 */
var fs = require("fs");//操作文件

/**
 * 创建路径
 * @param {string} dir 路径
 */
exports.mkdir = function (dir) {
    console.log("开始创建目录");
    fs.mkdir(dir, function (err) {
        if (err) {
            return console.error(err)
        }
        console.log("目录创建成功");
    })
}
/**
 * 路径是否存在，不存在则创建
 * @param {string} dir 路径
 */

exports.dirExists = function (dir, doCreateDir) {
    console.log(dir);
    var _this = this;
    doCreateDir = doCreateDir !== false ? true : doCreateDir;
    // existsSync同步方法，异步方法exists
    fs.exists(dir, function (isExist) {
        console.log(isExist);
        if (!isExist && doCreateDir) {
            _this.mkdir(dir)
        }
        return isExist;
    })
}
