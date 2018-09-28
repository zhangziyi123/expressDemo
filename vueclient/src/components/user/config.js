/**
 * @author: zhangziyi-k@glondon.com
 * @description:
 * @Date: 2018/5/3 15:54
 */
/**
 * @author: zhangziyi-k@glondon.com
 * @description:
 * @Date: 2018/1/24 11:30
 */

export const mapServiceConfig = {
  serviceTypes: [
    {name: 'vectortile', alias: '矢量切片', preview: true},
    {name: 'wfs', alias: 'OGC WFS', preview: true},
    {name: 'wmts', alias: 'OGC WMTS', preview: true},
    {name: 'wms', alias: 'OGC WMS', preview: true},
    {name: 'download', alias: '下载服务', preview: false},
    {name: 'other', alias: '其他', preview: false}
  ],
  // 高级筛选的配置
  filterConditions: {
    conditions: [
      // {filterType: "serviceType", alias: "服务类别"},
      {filterType: 'timeinterval', alias: '更新时间'},
      {filterType: 'isrunning', alias: '运行状态'},
      {filterType: 'sharetype', alias: '权限'}
    ],
    // serviceType: {typeIndex: 0, items: [{value: "noLimit", name: "不限"}, {value: "dataService", name: "数据服务"}, {value: "securityService", name: "安全服务"}, {value: "sss", name: "下载服务"}, {value: "AnalyzeService", name: "分析服务"}], selectIndex: 0},
    timeinterval: {
      typeIndex: 0,
      items: [{name: '不限', value: 'noLimit'}, {name: '1小时内', value: '1'}, {name: '6小时内', value: '6'}, {
        name: '1天内',
        value: '24'
      }, {name: '1月内', value: '720'}],
      selectIndex: 0
    },
    isrunning: {
      typeIndex: 1,
      items: [{value: 'noLimit', name: '不限'}, {value: true, name: '运行中'}, {value: false, name: '已停止'}],
      selectIndex: 0
    },
    sharetype: {
      typeIndex: 2,
      items: [{name: '不限', value: 'noLimit'}, {name: '私有', value: 'private'}, {name: '公开', value: 'public'}],
      selectIndex: 0
    }
  },

  // 服务标签配置项,包括资源类型、所属行业
  resourceType: {
    TYPE_0: '矢量数据',
    TYPE_1: '栅格数据',
    TYPE_2: '其他'
  },
  industryType: {
    TYPE_0: '测绘',
    TYPE_1: '水利',
    TYPE_2: '地质',
    TYPE_3: '国土',
    TYPE_4: '交通',
    TYPE_5: '其他'
  },

  getName() {
    return 'lueluelue'
  }
}
export function getAlias () {
  return 'lueluelue2'
}

