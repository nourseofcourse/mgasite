<template>
  <nav class="site-nav">
    <ul class="site-nav__list">
      <li
        v-for="(item, idx) in items"
        :key="idx"
        class="site-nav__list-item">
          <nuxt-link :to="item.href">{{ item.name }}</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
  export default {
    props: {
      items: {
        type: Array
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>
