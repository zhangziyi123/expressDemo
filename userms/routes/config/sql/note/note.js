/**
 * @author: zhang@glondon.com
 * @description:
 * @Date: 2018/11/2 21:14
 */
// desc倒序， asc顺序
/*
* 接口： 增删改查
* 1.根据用户id分页获取日志
* 2.根据用户id增加日志
* 3. 删除日志
* 4. 改日志
* */
var markSqlStr = {
    getAllNotes: "select * from note_tb where userid = '{userid}' order by updatetime desc",
    getNotesByPage: "select * from note_tb where userid = '{userid}' order by updatetime desc limit {size} offset {index}",
    addNote: "insert into note_tb {fields} values {values}",
    deleteNote: "delete from note_tb where noteid = {noteid}",
    modifyNote: 'update note_tb set {model} where noteid = {noteid}', // UPDATE 表名称 SET 列名称1 = 新值,列名称2 = 新值 WHERE 列名称 = 某值
    getNoteById: "select * from note_tb where userid = '{userid}' and noteid = '{noteid}'"
}


module.exports = markSqlStr;