<template>
<Card class="gis-lymg">
  <p slot="title">图层管理</p>
  <p v-if="Array.isArray(layers)" v-for="item in layers" :key="item.id">{{item.id}}</p>
</Card>
</template>

<script>
export default {
  props: {
    layers: {
      type: Array
    }
  },
  data() {
    return {}
  }
}
</script>

<style lang="less">
.gis-lymg{
  position:absolute;
  float:left;
  left:0px;
  height:100vh;
  width:18vw;
  background-color:#d2d6de;
  z-index:11111;
}
</style>
