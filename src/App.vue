<template>
  <div>
    <div v-show="!islogin" class="login-bd">
      <p class="title">{{APP_NAME}}</p>
      <div class="input-box">
        <el-row class="box" :gutter="20">
          <el-col :span="6">
            <p> </p>
          </el-col>
          <el-col :span="12">
            <el-input id="input_user_name" placeholder="请输入用户名" readonly="readonly" v-model="input_user_name">
              <template slot="prepend">用户名</template>
            </el-input>
            <el-input id="input_secret" placeholder="请输入密码" v-model="input_secret">
              <template slot="prepend">密&nbsp;码</template>
            </el-input>
            <el-button style="width:100%;"@click="login">登录</el-button>
          </el-col>
          <el-col :span="6">
            <p> </p>
          </el-col>
        </el-row>
      </div>
    </div>
    <div v-show="islogin">
      <el-menu theme="dark" default-active="1" class="el-menu-demo" mode="horizontal" @select="handleselect">
        <el-menu-item index="/">随机抽取</el-menu-item>
        <el-menu-item index="/officials">检查人员名录库</el-menu-item>
        <el-menu-item index="/targets">检查主体名录库</el-menu-item>
      </el-menu>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

const DEFINES = require('./defines.js')  
export default {
  data () {
    return {
      input_user_name: DEFINES.USER_NAME,
      input_secret: "",
      islogin: false,
      APP_NAME: DEFINES.APP_NAME,
    }
  },
  mounted: function () {
    this.$nextTick(function () {
    })
  },
  methods: {
    login () {
      if (this.input_secret === DEFINES.SECRET) {
        this.islogin = true
      } else {
        this.$notify( {
          title: '密码错误',
          message: '请输入正确密码',
          duration: 6000
        })
      }
    },
    handleselect (index) {
      this.$router.push(index)
    }
  }
}
</script>

<style lang="less" scoped>
  body {
    font-family: Helvetica, sans-serif;
    width: 100%;
    height: 100%;
  }
  
  .login-bd {
    width: 100%;
    height: 100%;
    .title {
      width: 100%;
      height: 100px;
      line-height: 100px;
      font-size: 36px;
      font-weight: bold;
      text-align: center;
    }
    .input-box {
      width: 100%;
      .box {
        width: 100%;
        box-sizing: border-box;
      }
    }
  }
</style>