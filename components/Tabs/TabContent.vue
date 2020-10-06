<template>
  <div>
    <Transition name="screen-fade" mode="out-in" appear>
      <keep-alive>
        <component :is="selected | fixComponent"></component>
      </keep-alive>
    </Transition>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import TaxProgram from '@/components/Tabs/TaxProgram.vue';
  import SeminarProgram from '@/components/Tabs/SeminarProgram.vue';
  import StateProgram from '@/components/Tabs/StateProgram.vue';
  import FederalProgram from '@/components/Tabs/FederalProgram.vue';
  import AgentsInTheNews from '@/components/Tabs/AgentsInTheNews.vue';
  export default {
    components: {
      TaxProgram,
      SeminarProgram,
      StateProgram,
      FederalProgram,
      AgentsInTheNews
    },
    computed: {
      ...mapState({
        selected: state => state.selectedTab
      })
    },
    filters: {
      fixComponent(value) {
        // converts name to proper file name
        return value.toLowerCase()
          .split(' ')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join('')
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>
