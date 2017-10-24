<template>
  <div>
    <h1>header</h1>
    <button @click="hander">提交</button>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  export default {
    data () {
      return {}
    },
    methods: {
      hander () {
        this.demo(100)
        this.$router.push('./nav')
      },
      ...mapActions([
        'demo'
      ])
    }
  }
</script>

<style lang="less">
  
</style>