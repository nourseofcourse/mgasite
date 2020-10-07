<template>
  <keep-alive>
    <component :is="icon"></component>
  </keep-alive>
</template>

<script>
import Seminars from '@/components/Icons/Seminars.vue'
import Arrow from '@/components/Icons/Arrow.vue'
import News from '@/components/Icons/News.vue';
import Federal from '@/components/Icons/Federal.vue';
import Tax from '@/components/Icons/Tax.vue';
import Cpa from '@/components/Icons/Cpa.vue';
import Creative from '@/components/Icons/Creative.vue';
import State from '@/components/Icons/State.vue';
  export default {
    props: {
      icon: {
        type: String,
        required: true
      },
    },
    components: {
      Seminars,
      Arrow,
      News,
      Federal,
      Tax,
      Cpa,
      Creative,
      State
    }
  }
</script>

<style lang="scss" scoped>

</style>
