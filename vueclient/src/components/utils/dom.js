/**
 * 作者：slg
 * 时间：2017/2/22
 * 功能：
 */
/**
 * 事件监听器的存储表
 */
let Event_listeners = [];
let Event_eventFilter = [];
/**
 * 为目标元素添加事件监听器
 */
function getDom(id) {
  if (Object.prototype.toString.call(id) === '[object String]') {
    return document.getElementById(id);
  }
  return id;
}

function getEvent(event) {
  return window.event || event;
}

export function on(element, type, listener) {
  type = type.replace(/^on/i, '');
  element = getDom(element);
  let realListener = function (ev) {
    // 1. 这里不支持EventArgument,  原因是跨frame的事件挂载
    // 2. element是为了修正this
    listener.call(element, ev);
  };
  let lis = Event_listeners;
  let filter = Event_eventFilter;
  let afterFilter;
  let realType = type;
  type = type.toLowerCase();
  // filter过滤
  if (filter && filter[type]) {
    afterFilter = filter[type](element, type, realListener);
    realType = afterFilter.type;
    realListener = afterFilter.listener;
  }
  // 事件监听器挂载
  if (element.addEventListener) {
    element.addEventListener(realType, realListener, false);
  } else if (element.attachEvent) {
    element.attachEvent('on' + realType, realListener);
  }

  // 将监听器存储到数组中
  lis[lis.length] = [element, type, listener, realListener, realType];
  return element;
}

export function un(element, type, listener) {
  element = getDom(element);
  type = type.replace(/^on/i, '').toLowerCase();

  let lis = Event_listeners;
  let len = lis.length;
  let isRemoveAll = !listener;
  let item;
  let realType;
  let realListener;

  //如果将listener的结构改成json
  //可以节省掉这个循环，优化性能
  //但是由于un的使用频率并不高，同时在listener不多的时候
  //遍历数组的性能消耗不会对代码产生影响
  //暂不考虑此优化
  while (len--) {
    item = lis[len];

    // listener存在时，移除element的所有以listener监听的type类型事件
    // listener不存在时，移除element的所有type类型事件
    if (item[1] === type && item[0] === element && (isRemoveAll || item[2] === listener)) {
      realType = item[4];
      realListener = item[3];
      if (element.removeEventListener) {
        element.removeEventListener(realType, realListener, false);
      } else if (element.detachEvent) {
        element.detachEvent('on' + realType, realListener);
      }
      lis.splice(len, 1);
    }
  }
  return element;
}

export function preventDefault(event) {
  event = getEvent(event);
  if (event.preventDefault) {
    event.preventDefault();
  } else {
    event.returnValue = false;
  }
}

export function stopBubble(event) {
  event = getEvent(event);
  event.stopPropagation ? event.stopPropagation() : event.cancelBubble = true;
}
