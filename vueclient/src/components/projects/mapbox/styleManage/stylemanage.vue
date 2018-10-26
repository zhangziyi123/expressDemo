<template>
<Card class="gis-style">
  <p slot="title">设置样式</p>
  <Tabs active-key="key1">
    <Tab-pane label="标注" key="key1">
      <Row class="gis-style-panel">
        <i-col span="7" class="gis-style-panel-col">
        <ul>
          <li>
            <span>文本字段</span>
            <span>值</span>
          </li>
          <li>
            <span>颜色</span>
            <span>值</span>
          </li>
          <li>
            <span>透明度</span>
            <span>值</span>
          </li>
          <li>
            <span>字体</span>
            <span>值</span>
          </li>
          <li>
            <span>大小</span>
            <span>值</span>
          </li>
          <li>
            <span>字符间距</span>
            <span>值</span>
          </li>
          <li>
            <span>行间距</span>
            <span>值</span>
          </li>
          <li>
            <span>最大宽度</span>
            <span>值</span>
          </li>
          <li class="divider"></li>
          <li>
            <span>光晕颜色</span>
            <span>值</span>
          </li>
          <li>
            <span>光晕宽度</span>
            <span>值</span>
          </li>
          <li>
            <span>光晕模糊</span>
            <span>值</span>
          </li>
        </ul></i-col>
        <i-col span="17">

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
  &-panel {
    text-align:left;
    &-col:first-child{
      border-right:1px solid #d2d6de;
      padding-right: 10px;
    }
    ul{
      li{
        margin-top: 10px;
        span{
          display:block;
          margin-top: 5px;
          cursor:pointer;
          overflow:hidden;
          text-overflow:ellipsis;
          white-space:nowrap;
          &:hover{
            color: dodgerblue;
          }
        }
      }
    }
  }
}
</style>
