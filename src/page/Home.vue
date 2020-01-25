<template>
  <div class="layout">
    <Layout>
      <Header>
        <div class="layout-nav">
          <div style="float: right; color: white;font-size: 16px">
            <Icon type="md-man"></Icon>
            <span>
            {{currentUserName}}
          </span>
            <Button size="small" shape="circle" @click="logout">登出</Button>
          </div>
        </div>
      </Header>
      <Layout :style="{minHeight:'93vh'}">
        <Sider hide-trigger :style="{background: '#fff'}" >
            <Menu theme="light" width="auto" v-for="menu in menus"  :key='menu.id'>
              <Submenu :name=menu.menuTag>
                <template slot="title">
                  <Icon type="ios-paper" />
                  {{menu.name}}
                </template>
                <div v-for="menuItem in menu.children" :key='menuItem.id' >
                  <MenuItem :name=menuItem.menuTag :to=menuItem.url>{{menuItem.name}}</MenuItem>
                </div>
              </Submenu>
            </Menu>
        </Sider>
        <Layout :style="{padding: '10px 24px 24px'}">
          <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
            <router-view/>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      currentUserName: '',
      menus: []
    }
  },
  mounted: function () {
    let me = this
    var currentUserName = localStorage.getItem('currentUserName')
    me.currentUserName = currentUserName
    me.initMenu(me.currentUserName)
  },
  methods: {
    logout: function () {
      let me = this
      me.$axios.get('/user/userLogout')
        .then(function () {
          localStorage.removeItem('currentUserName')
          me.$router.push('/login')
        })
    },
    initMenu: function (userName) {
      let me = this
      me.$axios.get('/user/getResourseByUserName', {params: {userName: userName}})
        .then(function (res) {
          me.menus = res.data.data
        })
    }
  }
}
</script>
<style scoped>
  .layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
  }
  .layout-logo{
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
  }
  .layout-nav{
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
  }
  .layout-footer-center{
    text-align: center;
  }
  .Sider{
    display: block;
    position: absolute;
    left: 0;
    top: 70px;
    bottom: 0;
    overflow-y: scroll;
  }
</style>
