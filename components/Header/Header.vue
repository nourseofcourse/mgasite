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
      <b-button pill size="lg" variant="primary">Logout</b-button>
    </div>
  </header>
</template>

<script>
import NavItems from '@/components/Header/NavItems.vue';
  export default {
    data() {
      return {
        items: [
          { name: 'Dashboard', href: '/' },
          { name: 'Courses', href: '/courses' },
          { name: 'Users', href: '/users' },
          { name: 'Reports', href: '/reports' }
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
