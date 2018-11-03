/**
 * @author: zhang@glondon.com
 * @description:
 * @Date: 2018/11/2 21:14
 */
// desc倒序， asc顺序
var markSqlStr = {
    getAllNotes: "select * from note_tb where userid = '{userid}' order by updatetime desc",
    getNotesByPage: "select * from note_tb where userid = '{userid}' order by updatetime desc limit {size} offset {index}"
}


module.exports = markSqlStr;