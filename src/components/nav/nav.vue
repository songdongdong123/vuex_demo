<template>
  <div class="nav">
    <h1>nav</h1>
    <p>{{test.age}}</p>
    <p>{{demo}}</p>
    <button @click="getData">查看</button>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    data () {
      return {}
    },
    computed: {
      ...mapGetters([
        'test',
        'demo',
        'move'
      ])
    },
    methods: {
      getData () {
        console.log(this.move)
      }
    }
  }
</script>

<style lang="less">
  
</style>