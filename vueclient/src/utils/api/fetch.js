/**
 * @author: zhangziyi-k@glondon.com
 * @description:
 * @Date: 2018/6/26 15:55
 */
import resource from "vue-resource";
import Vue from "vue";

Vue.http.interceptors.push((request, next) => {
  let timeout;
  // 如果某个请求设置了_timeout,那么超过该时间，会终端该（abort）请求,并执行请求设置的钩子函数onTimeout方法，不会执行then方法。
  if (request._timeout) {
    timeout = setTimeout(() => {
      if(request.onTimeout) {
        request.onTimeout(request);
        request.abort()
      }
    }, request._timeout);
  }
  next((response) => {
    clearTimeout(timeout);
    return response;
  })
})


export function fetchGet(url, data, options) {
  return new Promise((resolve, reject) => {
    Vue.http.get(url, options).then(
      response => {
        resolve(response.data)
      },
      err => {
        resolve(err)
      }
    ).catch((error) => reject(error))
  });
}

export function fetchPost(url, data, options) {
  return new Promise((resolve, reject) => {
    Vue.http.post(url, data, options)
      .then(
        response => {
          resolve({success: true, data: response.data})
        },
        err => {
          resolve({success: false, data: err})
        }
      ).catch((error) => reject(error))
  });
}

export function fetchPut(url, data, options) {
  return new Promise((resolve, reject) => {
    Vue.http.put(url, data, options)
      .then(
        response => {
          resolve({success: true, data: response.data})
        },
        err => {
          resolve({success: false, data: err})
        }
      ).catch((error) => reject(error))
  });
}

export function fetchDelete(url, params, options) {
  return new Promise((resolve, reject) => {
    Vue.http.delete(url, {params: params}, options).then(response => {
      resolve({success: true, data: response.data})
    }, err => {
      resolve({success: false, data: err})
    }).catch((error) => {
      resolve(error);
    });
  })
}

export function fetchPatch(url, data, options) {
  return new Promise((resolve, reject) => {
    Vue.http.patch(url, data, options).then(response => {
      resolve({success: true, data: response.data})
    }, err => {
      resolve({success: false, data: err})
    }).catch((error) => {
      resolve(error);
    });
  })
}
