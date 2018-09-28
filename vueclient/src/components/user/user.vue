<template>
  <div>123131
    <button @click="loginBtn">登录</button>
  </div>
</template>
<script>
import Vue from 'vue';
import * as config from "./config";
export default {
  data () {
    return {
      msg: '',
      password: "123132131",
      toolTipMsg: "",
      popperVM2: null,
      name: "123"
    }
  },
  mounted () {
    debugger;
    let ss = document.cookie;
  },
  methods: {
    getNameFn(name) {
      this.alertHello();
      this.name = "lalala";
      return "测试三点运算符传递方法";
    },
    alertHello() {
    },
    loginBtn() {
    }
  },
  components: {
  }
}
</script>
