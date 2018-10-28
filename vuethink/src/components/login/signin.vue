<template>
<gis-row>
  <gis-col span="14">
    <div class="gis-logo">
      <!-- 使用SVG的方式 -->
      <h1 class="title">
        <a href="#">GeoCloud</a>
      </h1>
    </div>
  </gis-col>
  <gis-col span="10">
    <div class="gis-signin login-wrap">
      <gis-form :model="ruleFormLogin" :rules="rulesLogin" ref="ruleFormLogin" class="login-wrap-form">
        <div class="title">登录</div>
        <gis-form-item prop="username">
          <gis-input iconLeft icon="fa fa-user" v-model="ruleFormLogin.username" @keyup.enter.native="submitForm('ruleFormLogin')"></gis-input>
        </gis-form-item>
        <gis-form-item prop="password">
          <gis-input iconLeft icon="fa fa-key" type="password" v-model="ruleFormLogin.password" auto-complete="off" @keyup.enter.native="submitForm('ruleFormLogin')"></gis-input>
        </gis-form-item>
        <div class="gis-signup-forget-link">
          <router-link :to="{name: 'signup'}" class="signup">没有账号？</router-link>
          <router-link :to="{name: 'forget'}" class="forget">忘记密码？</router-link>
        </div>
        <gis-form-item>
          <!-- 点击之后按钮的类型变成登录中 -->
          <gis-button :loading="loginBtnLoading" type="success" class="login-wrap-button" size="middle" @click="submitForm('ruleFormLogin')">
            {{loginBtnName}}
          </gis-button>
        </gis-form-item>
      </gis-form>
    </div>
  </gis-col>
</gis-row>
</template>

<script>
import store2 from "store2";
export default {
  name: "login",
  data() {
    let checkUsername = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("用户名不能为空"));
      } else {
        callback();
      }
    };

    let validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        callback();
      }
    };
    return {
      loginBtnName: "登录",
      loginBtnLoading: false,
      ruleFormLogin: {
        username: "",
        password: ""
      },
      rulesLogin: {
        password: [{validator: validatePass, trigger: "blur"}],
        username: [{validator: checkUsername, trigger: "blur"}]
      },
      msgFlag: true
    };
  },
  mounted() {
  },
  methods: {
    submitForm() {}
    /*   submitForm(formName) {
     this.loginBtnLoading = true;
     this.loginBtnName = "登录中";
     // 调用登录
     this.$refs[formName].validate(async valid => {
     if (valid) {
     const {username, password} = this.ruleFormLogin;
     // ES6中可以使用async语法， 这里使用的是回调函数的
     this.$store.dispatch(loginConstants.GET_LOGIN_INFO, {
     username: username,
     password: password
     }).then((result) => {
     this.loginBtnLoading = false;
     this.loginBtnName = "登录";
     if (result.sucess) {
     // 登录跳转
     } else {
     if (result.status === 401) {
     this.$Message.error("用户名或者密码错误!");
     } else {
     this.$Message.error("服务异常,请稍后再试!");
     }
     }
     });
     } else {
     this.loginBtnLoading = false;
     this.loginBtnName = "登录";
     }
     });
     }*/
  }
};
</script>
<style lang="less">
@import "./style/singin";
</style>
