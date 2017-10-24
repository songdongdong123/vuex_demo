<template>
  <div class="footer">
    <h1>footer</h1>
    <h2>{{test.name}}</h2>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    data () {
      return {}
    },
    created () {
      this.demo()
      this.requestNot()
    },
    computed: {
      ...mapGetters([
        'test'
      ])
    },
    methods: {
      demo () {
        if (Notification.permission === 'granted') {
          console.log('用户允许通知')
        } else if (Notification.permission === 'denied') {
          console.log('用户拒绝通知')
        } else {
          console.log('用户还没选择，去向用户申请权限吧')
        }
      },
      requestNot () {
        Notification.requestPermission().then(permission => {
          if (permission === 'granted') {
            let n
            setTimeout(() => {
              n = new Notification('状态更新提醒', {
                body: '你的朋友圈有3条新状态，快去查看吧',
                tag: 'linxin',
                icon: 'http://blog.gdfengshuo.com/images/avatar.jpg',
                requireInteraction: true
              })
            }, 2 * 1000)
            setTimeout(function () {
              n.close()
            }, 3000)
          } else if (permission === 'denied') {
            console.log('用户拒绝通知')
          }
        })
      }
    }
  }
</script>

<style lang="less">
  
</style>