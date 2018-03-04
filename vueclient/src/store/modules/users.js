/**
 * @author: zhang@glondon.com
 * @description:
 * @Date: 2018/3/4 19:16
 */
import mapService from '../../serviceConfig'
import * as types from '../mutation-types'
import Vue from 'vue'
import {paramURL, trim, ObjectMap} from '../../utils/utils'
// 导出
export default {
  state: {},
  getters: {},
  actions: {
    [types.CHANGE_PASSWORD_USER](context, args) {
      let dataInfo = {
        name: args.datainfos.dataName,
        infos: args.datainfos.infos,
        data: {
          datatype: args.datainfos.datatype,
          shapetype: args.datainfos.shapetype,
          fields: {}
        }
      };

      // 开始发送请求
      let setDataUrl = paramURL(mapService.ChangeUserPassword, {
        userid: userInfo.USERID
      });

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
        context.commit(types.CHANGE_LOADING_STATE, {
          loadingDisplay: 'display: none'
        });
      })
    }
  },
  mutations: {
    [types.CHANGE_PASSWORD_USER](states, args) {
      // 数据列表，数据总数
      states.shareDataInfo = args;
    }
  }
}

