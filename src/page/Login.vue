<template>
  <div class="login">
    <div class="login-con">
      <Card :bordered="false">
        <p slot="title">
          <Icon type="log-in"></Icon>
          欢迎登录
        </p>
        <div class="form-con">
          <Form ref="loginForm" :model="form" :rules="rules">
            <FormItem prop="account">
              <Input v-model="form.account" placeholder="请输入用户名">
              <span slot="prepend">
                  <Icon :size="16" type="ios-person"></Icon>
              </span>
              </Input>
            </FormItem>
            <FormItem prop="password">
              <Input type="password" v-model="form.password" placeholder="请输入密码">
              <span slot="prepend">
                  <Icon :size="14" type="md-lock"></Icon>
              </span>
              </Input>
            </FormItem>
            <FormItem>
              <Button type="primary" long @click="login" >登录</Button>
              <Button long style="margin-top:5px" @click="regist">注册</Button>
            </FormItem>
          </Form>
        </div>
      </Card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      form: {
        account: '',
        password: ''
      },
      rules: {
        account: [
          { required: true, message: '账号不能为空', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '密码不能为空', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    login: function () {
      let me = this
      if (me.form.account && me.form.password) {
        me.$axios.post('/user/login', me.form)
          .then(function (res) {
            if (res.status === 200) {
              if (res.data.status === 1) {
                me.$Message.success('登入成功')
                localStorage.setItem('currentUserName', me.form.account)
                me.$router.push('/home')
              } else {
                me.$Message.error(res.data.msg)
              }
            }
          })
          .catch(function () {
            me.$Message.error('系统异常')
          })
      }
    },
    regist: function () {
      let me = this
      if (me.form.account && me.form.password) {
        me.$axios.post('/user/regist', me.form)
          .then(function (res) {
            if (res.status === 200) {
              if (res.data.status === 1) {
                me.$Message.success('注册成功')
                me.$router.push('/home')
              } else {
                me.$Message.error(res.data.msg)
              }
            }
          })
          .catch(function () {
            me.$Message.error('系统异常')
          })
      }
    }
  }

}
</script>

<style lang="less">
  @import '../login';
</style>
