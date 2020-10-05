<template>
  <div>
    <Header />
    <main class="main">
      <nuxt />
    </main>
  </div>
</template>

<script>
import Header from '@/components/Header/Header.vue';
  export default {
    components: {
      Header
    },
    data() {
      return {
        clipped: false,
        drawer: true,
        fixed: false,
        items: [
          { icon: 'apps', title: 'Welcome', to: '/' },
          { icon: 'bubble_chart', title: 'Inspire', to: '/inspire' },
          { icon: 'bubble_chart', title: 'Posts', to: '/posts' }
        ],
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: 'MegaStar PRC'
      }
    }
  }
</script>
