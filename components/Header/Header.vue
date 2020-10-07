<template>
  <header class="site-head" ref="js-headroom">
    <div class="site-head__logo">
      <nuxt-link to="/">
        <img src="/m-logo.png" alt="">
      </nuxt-link>
    </div>
    <div class="site-head__nav">
      <NavItems :items="items" />
    </div>
    <div class="site-head__user-nav">
      <button class="btn  btn--primary">LET'S TALK</button>
    </div>
  </header>
</template>

<script>
import NavItems from '@/components/Header/NavItems.vue';
import Headroom from 'headroom.js'
  export default {
    data() {
      return {
        items: [
          { name: 'WHO WE ARE', href: '/' },
          { name: 'WHAT WE DO', href: '/' },
          { name: 'HOW WE HELP', href: '/' },
          { name: 'CASE STUDIES', href: '/' }
        ]
      }
    },
    components: {
      NavItems
    },
    mounted() {
      this.$nextTick(() => {
        this.initHeadroom()
      })
    },
    methods: {
      initHeadroom() {
        let _this = this
        let el = this.$refs['js-headroom']

        let headroom = new Headroom(el, {
          tolerance: 5,
          offset: 205
        })

        headroom.init()
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
