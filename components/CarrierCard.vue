<template>
  <div class="card card--carrier  shadow">
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
  .card {
    display: flex;
    width: 85%;
    justify-content: center;
    align-items: center;
    height: 200px;
    margin-bottom: 30px;
  }
</style>
