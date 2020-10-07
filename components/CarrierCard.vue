<template>
  <div class="card card--carrier  shadow">
    <picture>
      <source :srcset="imagewebp" type="image/webp" :alt="alt">
      <source :srcset="imagewebp" type="image/jpeg" :alt="alt">
      <img :src="image" :alt="alt">
    </picture>
  </div>
</template>

<script>
  export default {
    props: {
      image: {
        type: String
      },
      imagewebp: {
        type: String
      },
      alt: {
        type: String
      }
    },
  }
</script>

<style lang="scss" scoped>
  .card {
    display: flex;
    width: 85%;
    justify-content: center;
    align-items: center;
    height: 200px;
    margin-bottom: 30px;
  }
</style>
