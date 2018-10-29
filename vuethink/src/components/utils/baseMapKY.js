module.exports = {
  Classic: [
    {
      class: "tdt_vec",
      value: "矢量图"
      // pic: "/static/img/addData/tdt_vec.png"
    },
    {
      class: "tdt_img",
      value: "卫星图"
      // pic: "/static/img/addData/tdt_img.png"
    }
  ],
  VectorTile: [
    {
      class: "vt_basic",
      name: "",
      value: "基础版",
      url: "../static/templateData/style/basic.json",
      // pic: "/static/img/addData/vt_basic.png",
      center: { lon: 120.140476, lat: 30.267162 },
      zoom: 13
    },
    {
      class: "vt_light",
      value: "白天版",
      url: "../static/templateData/style/light.json",
      // pic: "/static/img/addData/vt_light.png",
      center: { lon: 120.140476, lat: 30.267162 },
      zoom: 13
    },
    {
      class: "vt_dark",
      value: "黑夜版",
      url: "../static/templateData/style/dark.json",
      // pic: "/static/img/addData/vt_dark.png",
      center: { lon: 120.140476, lat: 30.267162 },
      zoom: 13
    },
    {
      class: "vt_empty",
      value: "空白地图",
      url: "../static/templateData/style/blank.json",
      // pic: "/static/img/addData/vt_dark.png",
      center: { lon: 120.140476, lat: 30.267162 },
      zoom: 13
    }
  ],
  Photography: [],
  PointCloud: []
};
