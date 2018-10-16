/**
 * 作者：slg
 * 时间：2017/7/3
 * 功能：渲染器的key，用来统一UI和渲染器中的值
 */
const renderKey = {
  MARKER: 'marker',
  CLUSTER: 'cluster',
  CHART: 'chart',
  GRADE: 'grade',
  TYPES: 'types',
  HEATMAP: 'heatmap',
  LineSimple: 'lineSimple',
  LineChoropleth: 'lineChoropleth',
  LineCategory: 'lineCategory',
  PolygonSimple: 'polygonSimple',
  PolygonCategory: 'polygonCategory',
  PolygonChoropleth: 'polygonChoropleth',
  MultiPoint: 'multipoint'
};

module.exports = {
  PointRenderConfig: [
    {
      'class': renderKey.MARKER,
      'value': '散点图',
      'name': renderKey.MARKER
    },
    {
      'class': renderKey.TYPES,
      'value': '类型符号',
      'name': renderKey.TYPES
    },
    {
      'class': renderKey.CLUSTER,
      'value': '灯光图',
      'name': renderKey.CLUSTER
    },
    {
      'class': renderKey.GRADE,
      'value': '等级符号',
      'name': renderKey.GRADE
    },
    {
      'class': renderKey.CHART,
      'value': '图表图',
      'name': renderKey.CHART
    },
    {
      'class': renderKey.HEATMAP,
      'value': '热度图',
      'name': renderKey.HEATMAP
    }
  ],
  PolylineRenderConfig: [
    {
      'class': 'lineSimple',
      'value': '单色渲染',
      'name': renderKey.LineSimple
    },
    {
      'class': 'lineChoropleth',
      'value': '分段渲染',
      'name': renderKey.LineChoropleth
    },
    {
      'class': 'lineCategory',
      'value': '单值渲染',
      'name': renderKey.LineCategory
    }
  ],
  PolygonRenderConfig: [
    {
      'class': 'polygonSimple',
      'value': '单色填充',
      'name': renderKey.PolygonSimple
    },
    {
      'class': 'polygonChoropleth',
      'value': '分段填充',
      'name': renderKey.PolygonChoropleth
    },
    {
      'class': 'polygonCategory',
      'value': '单值填充',
      'name': renderKey.PolygonCategory
    }
  ],
  renderKey
};
