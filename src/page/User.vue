<template>
    <div>
      <Table stripe :columns="columns" :data="data"></Table>
    </div>
</template>

<script>
export default {
  name: 'user',
  data () {
    return {
      columns: [
        {
          title: 'id',
          key: 'id'
        },
        {
          title: '账号',
          key: 'account'
        },
        {
          title: '名称',
          key: 'name'
        },
        {
          title: '角色',
          key: 'role'
        }
      ],
      data: []
    }
  },
  mounted: function () {
    this.init()
  },
  methods: {
    init: function () {
      let me = this
      me.$axios.get('/user/getAllUser')
        .then(function (res) {
          me.data = res.data.data
        })
    }
  }
}
</script>

<style scoped>

</style>
