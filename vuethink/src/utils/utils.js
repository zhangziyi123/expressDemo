/**
 * Get the first item that pass the test
 * by second argument function
 *
 * @param {Array} list
 * @param {Function} f
 * @return {*}
 */
function find(list, f) {
  return list.filter(f)[0];
}

/**
 * Deep copy the given object considering circular structure.
 * This function caches all nested objects and its copies.
 * If it detects circular structure, use cached copy to avoid infinite loop.
 *
 * @param {*} obj
 * @param {Array<Object>} cache
 * @return {*}
 */
export function deepCopy(obj, cache = []) {
  // just return if obj is immutable value
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  // if obj is hit, it is in circular structure
  const hit = find(cache, c => c.original === obj)
  if (hit) {
    return hit.copy
  }

  const copy = Array.isArray(obj) ? [] : {}
  // put the copy into cache at first
  // because we want to refer it in recursive deepCopy
  cache.push({
    original: obj,
    copy
  });

  Object.keys(obj).forEach(key => {
    copy[key] = deepCopy(obj[key], cache)
  });

  return copy
}

/**
 * forEach for object
 */
export function forEachValue(obj, fn) {
  Object.keys(obj).forEach(key => fn(obj[key], key))
}

export function isObject(obj) {
  return obj !== null && typeof obj === 'object'
}

export function isPromise(val) {
  return val && typeof val.then === 'function'
}

export function assert(condition, msg) {
  if (!condition) throw new Error(`[vuex] ${msg}`)
}

// 解析请求参数
export function paramURL(url, paramsObj) {
  let tempUrl = url;
  for (let paramName in paramsObj) {
    tempUrl = tempUrl.replace('{' + paramName.toUpperCase() + '}', paramsObj[paramName])
  }
  return tempUrl;
}

export function trim(str) {
  //删除左右两端的空格
  return str.replace(/(^\s*)|(\s*$)/g, "");
}

export function ObjectMap(obj) {
  let objAttr = [];
  for (let attr in obj) {
    objAttr.push({
      name: attr,
      value: obj[attr]
    })
  }
  return objAttr;
}
