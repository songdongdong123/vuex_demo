<template>
  <div class="tab">
    <router-link :to="{path:'/header'}" tag="div">header</router-link>
    <router-link :to="{path:'/nav'}" tag="div">nav</router-link>
    <router-link :to="{path: '/footer'}" tag="div">footer</router-link>
  </div>
</template>

<script>
  // import { mapMutations } from 'vuex'
  export default {
    data () {
      return {
        test: {
          name: 'ethan',
          age: 18
        }
      }
    },
    created () {
      // this.setTest(this.test)
    },
    methods: {
      // ...mapMutations({
      //   setTest: 'SET_TEST'
      // })
    }
  }
</script>

<style lang="less">
  .active {
    color: red
  }
</style>