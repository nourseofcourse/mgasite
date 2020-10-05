<template>
  <div class="card card--carrier">
    <img :src="image" :alt="alt">
  </div>
</template>

<script>
  export default {
    props: {
      image: {
        type: String
      },
      alt: {
        type: String
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>
