<template>
<Form ref="formInline" :model="formInline" :rules="ruleInline" inline>
  <FormItem prop="user">
    <i-input type="text" v-model="formInline.user" placeholder="Username">
      <Icon type="ios-person-outline" slot="prepend"></Icon>
    </i-input>
  </FormItem>
  <FormItem prop="password">
    <i-input type="password" v-model="formInline.password" placeholder="Password">
      <Icon type="ios-locked-outline" slot="prepend"></Icon>
    </i-input>
  </FormItem>
  <FormItem>
    <Button type="primary" @click="handleSubmit('formInline')">登录</Button>
    <Button type="primary" @click="getUserInfo('formInline')">登录2</Button>
  </FormItem>
</Form>
</template>
<script>
import Vue from 'vue';
import * as types from '../../store/mutation-types'
import Cookie from "js-cookie";
import { mapGetters, mapActions } from 'vuex';
export default {
  data () {
    return {
      formInline: {
        user: '',
        password: ''
      },
      ruleInline: {
        user: [
          {required: true, message: 'Please fill in the user name', trigger: 'blur'}
        ],
        password: [
          {required: true, message: 'Please fill in the password.', trigger: 'blur'},
          {type: 'string', min: 6, message: 'The password length cannot be less than 6 bits', trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    handleSubmit (name) {
      /*      this.$refs[name].validate((valid) => {
       if (valid) {
       this.$Message.success('开发中!');
       } else {
       this.$Message.error('Fail!');
       }
       })*/
      this.$store.dispatch(types.LOGIN).then(res => {
        console.log("result", res);
      })
    },
    getUserInfo() {
      this.$store.dispatch(types.GET_USERINFO).then(res => {
        console.log("result", res);
      })
    }
  }
}
</script>
