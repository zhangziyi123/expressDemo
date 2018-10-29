<template>
  <gis-row>
    <gis-col span="14">
      <div class="gis-logo">
        <!-- 使用SVG的方式 -->
        <h1 class="title">
          <a href="#">欢迎注册ZJGIS</a>
        </h1>
      </div>
    </gis-col>
    <gis-col span="10">
      <div class="gis-signup login-wrap">
        <gis-form :model="ruleFormRegister" :rules="rulesRegister" ref="ruleFormRegister" class="login-wrap-form">
          <div class="title">注册</div>
          <gis-form-item prop="UserName">
            <gis-input iconLeft icon="fa fa-user" v-model="ruleFormRegister.UserName" placeholder="设置账号" @keyup.enter.native="submitForm('ruleFormRegister')"></gis-input>
          </gis-form-item>
          <gis-form-item prop="Name">
            <gis-input iconLeft icon="fa fa-user" v-model="ruleFormRegister.Name" placeholder="设置用户名" @keyup.enter.native="submitForm('ruleFormRegister')"></gis-input>
          </gis-form-item>
          <gis-form-item prop="Password" :rules="{required: true, message: '请输入密码', trigger: 'blur'}">
            <gis-input iconLeft icon="fa fa-key" type="password" v-model="ruleFormRegister.Password" placeholder="设置登录密码" auto-complete="off" @keyup.enter.native="submitForm('ruleFormRegister')"></gis-input>
          </gis-form-item>
          <gis-form-item prop="RePassword">
            <gis-input iconLeft icon="fa fa-key" type="password" v-model="ruleFormRegister.RePassword" placeholder="请确认您的密码" auto-complete="off" @keyup.enter.native="submitForm('ruleFormRegister')"></gis-input>
          </gis-form-item>
          <gis-form-item>
            <!-- 点击之后按钮的类型变成登录中 -->
            <gis-button :loading="registerBtnLoading" type="success" class="login-wrap-button" size="middle" @click="submitForm('ruleFormRegister')">
              注册
            </gis-button>
          </gis-form-item>
        </gis-form>
      </div>
    </gis-col>
  </gis-row>
</template>

<script>
  import {loginConstants} from "../../store/ActionTypes";
  export default {
    data() {
      var _this = this;
      // 验证名称只能为字母和数字
      let checkUserName = (rule, value, callback) => {
        let reg = /^[0-9a-zA-Z]*$/g;
        if (value === "") {
          callback(new Error("名称不能为空"));
        } else if (value.length < 4 || value.length > 15) {
          callback(new Error("请输入4-15位的英文和数字字符"));
        } else if (!reg.test(value)) {
          callback(new Error("名称不能包含中文和特殊字符"));
        } else {
          _this.checkUserExist(value).then(hasExist => {
            if (hasExist) {
              callback(new Error("账号名称已存在"));
            } else {
              callback();
            }
          });
        }
      };

      let validateCheckPass = (rule, value, callback) => {
        if (value === "") {
          callback(new Error("请再次输入密码"));
        } else if (value !== _this.ruleFormRegister.Password) {
          // 不对
          callback(new Error("两次输入密码不一致!"));
        } else {
          callback();
        }
      };
      return {
        registerBtnName: "登录",
        ruleFormRegister: {
          UserName: "",
          Password: "",
          Name: "",
          RePassword: ""
        },
        rulesRegister: {
          UserName: [{validator: checkUserName, trigger: "blur", required: true}],
          Name: [{required: true, message: "请输入用户名", trigger: "blur"}],
          RePassword: [{validator: validateCheckPass, trigger: "blur"}]
        },
        msgFlag: true,
        registerBtnLoading: false
      };
    },
    mounted() {
    },
    methods: {
      submitForm(name) {
        this.$refs[name].validate(valid => {
          if (valid) {
            this.$store.dispatch(loginConstants.CREATE_USER, {
              Account: this.ruleFormRegister.UserName,
              Password: this.ruleFormRegister.Password,
              Name: this.ruleFormRegister.Name
            }).then((result) => {
              if (result.success) {
                this.$Message.success("注册成功");
                this.$router.push({name: "signin", path: "/signin"});
              } else {
                this.$Message.error("注册失败");
              }
            });
          } else {
            this.$Message.error("请先完成验证信息!");
          }
        });
      },
      async checkUserExist(username) {
        let result = await this.$store.dispatch(loginConstants.CHECK_USER_EXIST, {
          UserName: username
        });
        return result;
      }
    }
  };
</script>
