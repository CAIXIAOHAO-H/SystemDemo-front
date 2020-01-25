<template>
  <div>
    <Tree :data="resourse" show-checkbox></Tree>
  </div>
</template>

<script>
export default {
  name: 'resourse',
  data () {
    return {
      resourse: []
    }
  },
  mounted: function () {
    this.init()
  },
  methods: {
    init: function () {
      let me = this
      me.$axios.get('system/getAllResourse')
        .then(function (res) {
          me.resourse = res.data.data
        })
    }
  }
}
</script>

<style scoped>

</style>
