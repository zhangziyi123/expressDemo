/**
 * @author: zhangziyi-k@glondon.com
 * @description:
 * @Date: 2018/5/9 13:35
 */
import {createIframe, delIframeByClass} from "../../../utils/utils";
import * as ssoConfig from "../../../configs/ssoConfig"; // 所有子系统的配置信息
import store2 from "store2";

const tool = {
  processSSO(userInfo, ssoUrl) {
    let systemArr = ssoConfig.systemArr;
    let paramsString = userInfo ? "?cookie=" + escape(JSON.stringify(userInfo)) : "";
    delIframeByClass(document.body, "ssoIframe");
    for (let i = 0; i < systemArr.length; i++) {
      if (ssoUrl === systemArr[i].url) {
        continue;
      }
      createIframe(document.body, systemArr[i].url + paramsString, "ssoIframe");
    }
  },

  loadSSO (router) {
    let backUrl = router.currentRoute.query.backUrl || "";
    let ssoUrl = router.currentRoute.query.ssoUrl || "";
    let userInfo = store2.get("userInfo");
    this.processSSO(userInfo, ssoUrl);
    if (ssoUrl) {
      createIframe(document.body, ssoUrl + "?cookie=" + escape(JSON.stringify(userInfo)), "ssoIframe", () => {
        if (backUrl) {
          window.open(backUrl, "_parent");// 跳转到之前的系统页面
        } else {
          router.push({name: "index", path: "/index"});
        }
      });
    } else {
      router.push({name: "index", path: "/index"});
    }
  },

  clearSSO(router) {
    let backUrl = router.currentRoute.query.backUrl || "";
    let ssoUrl = router.currentRoute.query.ssoUrl || "";
    store2.remove("userInfo");
    this.processSSO("", ssoUrl); // 清空用户信息，包括子站的cookie
    if (ssoUrl) {
      createIframe(document.body, ssoUrl, "ssoIframe", () => {
        if (backUrl) {
          window.open(backUrl, "_parent");// 跳转到之前的系统页面
        } else {
          router.push({name: "signin"});
        }
      });
    } else {
      router.push({name: "signin"});
    }
  }
}

export default tool;
