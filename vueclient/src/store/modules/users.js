/**
 * @author: zhang@glondon.com
 * @description:
 * @Date: 2018/3/4 19:16
 */
import mapService from '../../serviceConfig'
import * as types from '../mutation-types'
import Vue from 'vue'
import { paramURL, trim, ObjectMap } from '../../utils/utils'
import Cookie from "js-cookie";
// 导出
export default {
  state: {},
  getters: {},
  actions: {
    [types.LOGIN](context, args) {
      Vue.http.get('http://localhost:3000/users/login/zzy/123').then((response) => {
        return response.json()
      }, (response) => {
        // 请求失败错误处理
      }).then(res => {
        Cookie.set("expressCookie", JSON.stringify(res.userInfo));
      })
    },
    [types.GET_USERINFO](context, args) {
      Vue.http.get('http://localhost:3000/users/userInfo', {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
          'autoken': "eyJkYXRhIjoiMmM4ZDAyNDgtMGFkNy00MjE5LWE3MzktZTI4M2U1ZDhlMWUzIiwiY3JlYXRlZCI6MTUzODU2ODI3OCwiZXhwIjoxMH0=.rhR3/6VsbCN/66yBTz3N++pCeEqm6avLehn8tHULEc4="
        }
      }).then((response) => {
        return response.json()
      }, (response) => {
        // 请求失败错误处理
      }).then(res => {
        console.log(res)
      })
    },
    [types.CHANGE_PASSWORD_USER](context, args) {
      let dataInfo = {
        name: args.datainfos.dataName,
        infos: args.datainfos.infos,
        data: {
          datatype: args.datainfos.datatype,
          shapetype: args.datainfos.shapetype,
          fields: {}
        }
      }

      // 开始发送请求
      let setDataUrl = paramURL(mapService.ChangeUserPassword, {
        userid: userInfo.USERID
      })

      Vue.http.post(setDataUrl, JSON.stringify(dataInfo), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        }
      }).then((response) => {
        return response.json()
      }, (response) => {
        // 请求失败错误处理
        args.errorCallback && args.errorCallback()
      }).then(dataInfos => {

      })
    }
  },
  mutations: {
    [types.CHANGE_PASSWORD_USER](states, args) {
      // 数据列表，数据总数
      states.shareDataInfo = args
    }
  }
}

