/**
 * @author: zhangziyi-k@glondon.com
 * @description:
 * @Date: 2018/6/26 16:26
 */
import {fetchPost, fetchGet, fetchPut, fetchDelete} from '../fetch';
import utils from "../../utils";
import * as serviceConfig from "../../../configs/serviceConfig";
let options = {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
  }
}

const noteAPI = {
  /**
   * 获取日志列表接口
   */
  getNoteList(params) {
    let url = utils.paramURL(serviceConfig, {
      PAGENUM: params.page,
      PAGESIZE: params.size
    });
    return fetchGet(url)
  },

  /**
   * 新增用户接口
   */
  addNote(params) {
    return fetchPost(serviceConfig, params)
  },

  /**
   * 修改用户信息接口
   */
  modifyNote(userModel) {
    let url = utils.paramURL(serviceConfig, {
      ID: userModel.id,
    });
    return fetchPut(url, userModel)
  },

  /**
   * 删除用户接口
   */
  delNote(userModel) {
    let url = utils.paramURL(serviceConfig, {
      ID: userModel.id,
    });
    return fetchDelete(url, userModel)
  }
}
export default noteAPI;
