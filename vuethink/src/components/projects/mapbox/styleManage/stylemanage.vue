<template>
<Card class="gis-style">
  <p slot="title">设置样式</p>
  <Tabs active-key="key1">
    <Tab-pane label="标注" key="key1">
      <Row class="gis-style-panel">
        <i-col span="7" class="gis-style-panel-col">
          <ul>
            <li :class="selectItemIndex === 0 ? 'activate' : ''" @click.stop="selectItemHandle(0)">
              <span>文本字段</span> <span>值</span>
            </li>
            <li :class="selectItemIndex === 1 ? 'activate' : ''" @click.stop="selectItemHandle(1)">
              <span>颜色</span> <span>值</span>
            </li>
            <li :class="selectItemIndex === 2 ? 'activate' : ''" @click.stop="selectItemHandle(2)">
              <span>透明度</span> <span>值</span>
            </li>
            <li :class="selectItemIndex === 3 ? 'activate' : ''" @click.stop="selectItemHandle(3)">
              <span>字体</span> <span>值</span>
            </li>
            <li :class="selectItemIndex === 4 ? 'activate' : ''" @click.stop="selectItemHandle(4)">
              <span>大小</span> <span>值</span>
            </li>
            <li :class="selectItemIndex === 5 ? 'activate' : ''" @click.stop="selectItemHandle(5)">
              <span>字符间距</span> <span>值</span>
            </li>
            <li :class="selectItemIndex === 6 ? 'activate' : ''" @click.stop="selectItemHandle(6)">
              <span>行间距</span> <span>值</span>
            </li>
            <li :class="selectItemIndex === 7 ? 'activate' : ''" @click.stop="selectItemHandle(7)">
              <span>最大宽度</span> <span>值</span>
            </li>
            <li class="divider"></li>
            <li :class="selectItemIndex === 8 ? 'activate' : ''" @click.stop="selectItemHandle(8)">
              <span>光晕颜色</span> <span>值</span>
            </li>
            <li :class="selectItemIndex === 9 ? 'activate' : ''" @click.stop="selectItemHandle(9)">
              <span>光晕宽度</span> <span>值</span>
            </li>
            <li :class="selectItemIndex === 10 ? 'activate' : ''" @click.stop="selectItemHandle(10)">
              <span>光晕模糊</span> <span>值</span>
            </li>
          </ul>
        </i-col>
        <i-col span="17" class="gis-style-panel-col">
           <Row v-if="selectItemIndex === 0">
             <i-col>
               <div>Text文本字段</div>
               <Input v-model="value" placeholder="请输入文本字段..." style="width: 300px" />
             </i-col>
           </Row>
        </i-col>
      </Row>
    </Tab-pane>
    <Tab-pane label="图标" key="key2">标签二的内容</Tab-pane>
    <Tab-pane label="位置" key="key3">标签三的内容</Tab-pane>
    <Tab-pane label="偏移" key="key3">标签三的内容</Tab-pane>
  </Tabs>
</Card>
</template>

<script>
export default {
  data() {
    return {
      activate: true,
      selectItemIndex: 0,
      // 需要先连接mapbox配图样式文件组织结构
      panelConfig: [
        {
          name: 'text',
          items: []
        }
      ]
    }
  },
  methods: {
    selectItemHandle(index) {
      this.selectItemIndex = index;
    }
  }
}
</script>

<style lang="less">
.gis-style{
  position:absolute;
  float:left;
  left:18vw;
  height:100vh;
  width:25vw;
  background-color:#ddd;
  z-index:11111;
  &-panel{
    text-align:left;
    height:80vh;
    &-col:first-child{
      border-right:1px solid #d0c8c8;
      padding-right:10px;
    }
    &-col{
      height:100%;
      overflow:auto;
    }
    ul{
      li{
        margin-top:5px;
        &:hover{
          background-color:#d2d6de;
        }
        span{
          display:block;
          margin-top:3px;
          padding:2px 5px;
          cursor:pointer;
          overflow:hidden;
          text-overflow:ellipsis;
          white-space:nowrap;
          &:hover{
            color:dodgerblue;
          }
        }
      }
    }
  }
}
</style>
