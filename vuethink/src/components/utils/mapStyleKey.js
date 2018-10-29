const FeatureTypeKeys = {
  // 要素类型
  POINT: "point",
  POLYLINE: "line",
  POLYLINE2: "linestring",
  POLYGON: "polygon",
  SYMBOL: "symbol",
  CIRCLE: "circle",
  FILL: "fill",
  BACKGROUND: "background",
  MULTIPOINT: "multipoint",
  MULTIPOLYLINE: "multilinestring",
  MULTIPOLYGON: "multipolygon"
};

const PanelShowKeys = {
  // 样式配置面板选择
  LAYERSLIST: "layersList",
  BASEMAPSETTING: "BaseMapSetting",
  STYLESETTING: "STYLESETTING",
  ADDLAYER: "AddLayer"
};

function layerIconType(layerType) {
  switch (layerType) {
    case FeatureTypeKeys.POINT:
      return "iconfont icon-iconfontdingwei1";
    case FeatureTypeKeys.CIRCLE:
      return "iconfont icon-iconfontdingwei1";
    case FeatureTypeKeys.POLYLINE:
      return "iconfont icon-vector-line";
    case FeatureTypeKeys.POLYGON:
      return "iconfont icon-vector-polygon";
    case FeatureTypeKeys.FILL:
      return "iconfont icon-vector-polygon";
    case FeatureTypeKeys.SYMBOL:
      return "iconfont icon-fontsize";
    case FeatureTypeKeys.BACKGROUND:
      return "fas fa-globe";
  }
}
export { layerIconType, FeatureTypeKeys, PanelShowKeys };
