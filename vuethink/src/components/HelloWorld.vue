<template>
  <div class="hello" id="world">
    hello
    <gis-input ref="passwordInput" type="password" v-model="password" placeholder="Password"></gis-input>
    <button @click="loginBtn">登录</button>
    <button @click="getUserInfo">获取用户详情</button>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        password: "123132131"
      }
    },
    methods: {
      loginBtn() {
      },
      getUserInfo() {
      }
    }
  }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2{
    font-weight:normal;
  }
  ul{
    list-style-type:none;
    padding:0;
  }
  li{
    display:inline-block;
    margin:0 10px;
  }
  a{
    color:#42b983;
  }
</style>
