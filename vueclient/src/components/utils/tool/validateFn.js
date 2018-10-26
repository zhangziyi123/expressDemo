/**
 * @author: zhangziyi-k@glondon.com
 * @description:
 * @Date: 2018/4/11 11:16
 */

function number(val) {
  let reg = /^\d+(\.\d{1,2})?$/;
  return reg.test(val);
}

// 判断字符串中是否包含特殊字符
function specialWord(val) {
  let reg = new RegExp("[`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？%+_\\s]");
  return reg.test(val);
}
// 判断日期是否包含日期和时间，格式参考2018-01-25 16:31:45
function reDateTime(val) {
  let reg = /^(?:19|20)[0-9][0-9]-(?:(?:0[1-9])|(?:1[0-2]))-(?:(?:[0-2][1-9])|(?:[1-3][0-1])) (?:(?:[0-2][0-3])|(?:[0-1][0-9])):[0-5][0-9]:[0-5][0-9]$/;
  return reg.test(val);
}

function checkServiceName(rule, value, callback) {
  let reg = /^[0-9a-zA-Z]{4,}$/g;
  if (value === "") {
    callback(new Error("请输入服务名称"));
  } else {
    if (Number(value).toString() !== "NaN") {
      callback(new Error("请输入至少一位英文字母"));
    } else if (!reg.test(value)) {
      callback(new Error("请输入至少4位英文字母或字母与数字组合"));
    } else {
      callback();
    }
  }
}

function checkServiceUrl(rule, value, callback) {
  let reg = /^((https|http|ftp|rtsp|mms)?:\/\/)[^\s]+/;
  if (value === "") {
    callback(new Error("请输入服务地址"));
  } else {
    if (!reg.test(value)) {
      callback(new Error("请输入合法的服务地址"));
    } else {
      callback();
    }
  }
}

function valideDataName(rule, value, callback) {
  if (value === "") {
    callback(new Error("名称不能为空"));
  } else {
    let ss = number(value);
    if (number(value)) {
      callback(new Error("名称不能为数字"));
    } else if (specialWord(value)) {
      callback(new Error("名称不能包含特殊字符"));
    }
    callback();
  }
};

export {
  number, specialWord, reDateTime, checkServiceName, checkServiceUrl, valideDataName
}
