/******** DOM操作 *********/
/**
 * 添加样式
 * @param obj - {Object} dom对象
 * @param cls - {String} 样式名称
 */
export function addClass (obj, cls) {
  let obj_class = obj.className // 获取 class 内容.
  let blank = (obj_class !== '') ? ' ' : '' // 判断获取到的 class 是否为空, 如果不为空在前面加个'空格'.
  // 组合原来的 class 和需要添加的 class.
  obj.className = obj_class + blank + cls // 替换原来的 class.
}

/**
 * 判断是否存在指定的样式
 * @param obj - {Object} dom对象
 * @param cls - {String} 样式名称
 */
export function hasClass (obj, cls) {
  let obj_class = obj.className // 获取 class 内容.
  let obj_class_lst = obj_class.split(/\s+/) // 通过split空字符将cls转换成数组.
  let x = 0
  for (x in obj_class_lst) {
    if (obj_class_lst[x] === cls) { // 循环数组, 判断是否包含cls
      return true
    }
  }
  return false
}

/**
 * 移除样式
 * @param obj - {Obejct} dom对象
 * @param cls - {String} 样式名称
 */
export function removeClass (obj, cls) {
  let obj_class = ' ' + obj.className + ' '
  obj_class = obj_class.replace(/(\s+)/gi, ' ')
  let removed = obj_class.replace(' ' + cls + ' ', ' ')
  removed = removed.replace(/(^\s+)|(\s+$)/g, '')
  obj.className = removed
}

/**
 * 获取元素样式
 * @param {Object} element
 * @param {String} styleName
 */
export function getStyle (element, styleName) {
  if (!element || !styleName) return null
  styleName = camelCase(styleName)
  if (styleName === 'float') {
    styleName = 'cssFloat'
  }
  try {
    let computed = document.defaultView.getComputedStyle(element, '')
    return element.style[styleName] || computed ? computed[styleName] : null
  } catch (e) {
    return element.style[styleName]
  }
}

/**
 * 判断是否在数组中存在相同元素
 * @param {Object} value
 * @param {Array} validList
 */
export function oneOf (value, validList) {
  for (let i = 0; i < validList.length; i++) {
    if (value === validList[i]) {
      return true
    }
  }
  return false
}

/**
 * 对象属性合并 通过arguments获取更多参数
 * @param {Object} target
 */
export function merge (target) {
  for (let i = 1, j = arguments.length; i < j; i++) {
    let source = arguments[i]
    for (let prop in source) {
      if (source.hasOwnProperty(prop)) {
        let value = source[prop]
        if (value !== undefined) {
          target[prop] = value
        }
      }
    }
  }
  return target
}

/**
 * 根据属性key获取value
 */
export function getCustomValue (array, val, sourceAttr, distAttr) {
  for (let i = 0; i < array.length; i++) {
    if (array[i][sourceAttr] === val) {
      return array[i][distAttr]
    }
  }
  throw new Error('【utils.js--getCustomValue】数据加载出错')
}

// 驼峰命名法
const SPECIAL_CHARS_REGEXP = /([\:\-\_]+(.))/g
const MOZ_HACK_REGEXP = /^moz([A-Z])/
const camelCase = function (name) {
  return name.replace(SPECIAL_CHARS_REGEXP, function (_, separator, letter, offset) {
    return offset ? letter.toUpperCase() : letter
  }).replace(MOZ_HACK_REGEXP, 'Moz$1')
}

/**
 * 对象属性合并 通过arguments获取更多参数
 * @param {Object} target
 */
export function dateFormat (fmt, date) {
  var o = {
    'M+': date.getMonth() + 1, //月份
    'd+': date.getDate(), //日
    'h+': date.getHours(), //小时
    'm+': date.getMinutes(), //分
    's+': date.getSeconds() //秒
  }
  if (/(y+)/.test(fmt)) { //根据y的长度来截取年
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  for (var k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
  }
  return fmt;
}
