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
      <div class="login-wrap">
        <gis-form ref="forgetSubmit" :model="forgetSubmit" :rules="forgetRules" class="login-wrap-form">
          <div class="title">找回密码</div>
          <gis-form-item prop="email">
            <gis-input iconLeft icon="fa fa-envelope" v-model="forgetSubmit.email" placeholder="请输入注册邮箱"></gis-input>
          </gis-form-item>
          <gis-form-item prop="activeCode">
            <gis-input iconLeft icon="fa fa-user" v-model="forgetSubmit.activeCode" placeholder="请输入6位校验码"></gis-input>
            <div class="gis-forget-activecode" v-if="!showTimer" @click="getActiveCode"><span>点击获取</span></div>
            <div class="gis-forget-activecode" v-if="showTimer">{{currentTime + '秒后失效'}}</div>
          </gis-form-item>
          <gis-form-item prop="newPwd">
            <gis-input type="password" iconLeft icon="fa fa-key" v-model="forgetSubmit.newPwd" placeholder="请输入新密码"></gis-input>
          </gis-form-item>
          <gis-form-item prop="confirmPwd">
            <gis-input type="password" iconLeft icon="fa fa-key" v-model="forgetSubmit.confirmPwd" placeholder="确认新密码"></gis-input>
          </gis-form-item>
          <gis-form-item>
            <!-- 点击之后按钮的类型变成登录中 -->
            <gis-button :loading="btnLoading" type="success" class="login-wrap-button" size="middle" @click="submitForm">
              确定
            </gis-button>
          </gis-form-item>
        </gis-form>
      </div>
    </gis-col>
  </gis-row>
</template>

<script>
  import tool from "../utils/tool/validateFn";
  import {userManageConstants} from "../../store/ActionTypes";
  export default{
    data() {
      let validateCheckPass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'))
        } else {
          if (value !== this.forgetSubmit.newPwd) {
            callback(new Error('两次密码不一致，请重新输入'))
          }
          callback()
        }
      };
      return {
        btnLoading: false,
        forgetSubmit: {
          email: "",
          activeCode: "",
          newPwd: "",
          confirmPwd: ""
        },
        forgetRules: {
          email: [
            {
              message: '请输入邮箱', trigger: 'blur', required: true
            },
            {
              type: 'email', message: '邮箱格式不正确' //需要添加KEY值
            }
          ],
          activeCode: [{trigger: 'blur', required: true, message: '请输入校验码'}],
          newPwd: [{trigger: "blur", required: true, message: '请输入新密码'}],
          confirmPwd: [{validator: validateCheckPass, trigger: "blur", required: true}]
        },
        showTimer: false,
        timeSeconds: 600,
        currentTime: 600
      }
    },
    methods: {
      // 获取激活码
      getActiveCode() {
        if (this.forgetSubmit.email) {
          this.sendCodeToEmail(this.forgetSubmit.email);
        } else {
          this.$Message.error("请输入接收激活码的邮箱地址");
        }
      },
      sendCodeToEmail(email) {
        this.$store.dispatch(userManageConstants.SEND_ACTIVECODE_TO_EMAIL, {
          email: email
        }).then((result) => {
          if (result.success) {
            this.$Message.success("校验码已发送至邮件！");
            this.showTimer = true;
            this.countdown(this.timeSeconds);
          } else {
            this.$Message.error("邮件发送失败！");
          }
        });
      },

      // 修改用户密码
      changePWD (params) {
        this.loading = true;
        this.$store.dispatch(userManageConstants.RETRIEVE_USER_PASSWORD, {
          Email: params.email,
          EmailPin: params.activeCode,
          NewPassword: params.newPwd
        }).then((result) => {
          this.loading = false;
          if (result.success) {
            this.$Message.success('修改成功!');
            this.$router.push({name: "signin"});
          } else {
            if (result.data) {
              this.$Message.error(result.data.Message);
            } else {
              this.$Message.error('修改失败!');
            }
          }
        });
      },

      submitForm() {
        this.$refs["forgetSubmit"].validate((valid) => {
          if (valid) {
            this.changePWD(this.forgetSubmit);
          } else {
            this.$Message.error('表单验证失败!');
          }
        });
      },
      countdown(seconds) {
        let _this = this;
        if (seconds === 0) {
          this.showTimer = false;
          this.timeSeconds = 60;
        } else {
          this.currentTime = seconds - 1;
          setTimeout(() => {
            _this.countdown(_this.currentTime)
          }, 1000)
        }
      }
    },
    mounted() {
    }
  }
</script>

<style lang="less">
  .gis-forget-activecode{
    position:relative; float:right; right:10px; height:12px; color:#2d8cf0;
    span{
      cursor:pointer;
    }
  }
</style>
