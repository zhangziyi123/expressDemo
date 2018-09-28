<template>
  <div>三点运算符</div>
</template>

<script>
export default {
  data() {
    return {
      name: "子组件"
    }
  },
  props: {
    data: {
      type: Object
    },
    name2: String,
    getName: Function
  },
  mounted() {
    debugger;
    let ss = this;
    let s2 = this.getName();
    let s3 = this.name;
    let tss = this.name2;
    console.log(tss);
  }
}
</script>
