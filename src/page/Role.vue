<template>
  <div>
    <Table stripe :columns="columns" :data="data"></Table>
  </div>
</template>

<script>
export default {
  name: 'role',
  data () {
    return {
      columns: [
        {
          title: 'id',
          key: 'id'
        },
        {
          title: '名称',
          key: 'name'
        },
        {
          title: '资源',
          key: 'resourse'
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
      me.$axios.get('/system/getAllRole')
        .then(function (res) {
          me.data = res.data.data
        })
    }
  }
}
</script>

<style scoped>

</style>
