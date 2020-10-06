<template>
  <nav class="foot-nav">
    <ul class="foot-nav__list">
      <li
        v-for="(item, idx) in items"
        :key="idx"
        class="foot-nav__list-item">
          <nuxt-link :to="item.href">{{ item.name }}</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
  export default {
    props: {
      items: {
        type: Array,
        required: true
      },
    },
  }
</script>

<style lang="scss" scoped>

</style>
