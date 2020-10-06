<template>
  <header class="site-head">
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
    }
  }
</script>

<style lang="scss" scoped>

</style>
