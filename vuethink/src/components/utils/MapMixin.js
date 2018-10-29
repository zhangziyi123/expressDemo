/**
 * 作者：shanligang
 * 创建时间：2017/10/16
 * 地图的抽象类
 */
export default {
  methods: {
    resizeMap() {
      // 重新刷新地图
      console.error('请在子类中覆写实现刷新地图功能！');
    },
    setBaseMap(basemap) {
      // 设置基础底图
      console.error('请在子类中覆写在设置底图方法！');
    },
    getMapCenter() {
      console.error('请在子类中覆写获取地图中心方法！');
    },
    getMapZoom() {
      console.error('请在子类中覆写获取地图级别方法！'); 
    }
  }
};
