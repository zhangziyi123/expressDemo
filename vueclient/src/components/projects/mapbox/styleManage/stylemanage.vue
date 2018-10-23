<template>
  <Card class="gis-style">
    <p slot="title">设置样式</p>
    <ul>
      <li>文本字段</li>
      <li>颜色</li>
      <li>透明度</li>
      <li>字体</li>
      <li>大小</li>
      <li>字符间距</li>
      <li>行间距</li>
      <li>最大宽度</li>
      <li class="divider"></li>
      <li>光晕颜色</li>
      <li>光晕宽度</li>
      <li>光晕模糊</li>
    </ul>
  </Card>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>

<style lang="less">
.gis-style{
  position:absolute;
  float: left;
  left: 20vw;
  height: 100vh;
  width: 20vw;
  background-color: #ddd;
  z-index: 11111;
}
</style>
