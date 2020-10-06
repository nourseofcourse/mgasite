<template>
  <div class="tabs">
    <div class="tabs__menu">
      <div
        v-for="tab in tabs"
        :key="tab"
        @click="updateTab(tab)"
        class="tabs__menu-item"
        :class="{ 'active': ( selected == tab ) }"
        :aria-selected="selected == tab"
      >{{ tab }}</div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
  export default {
    data() {
      return {
        tabs: ['Tax Program', 'Seminar Program', 'State Program', 'Federal Program', 'Agents in the News'],
      }
    },
    computed: {
      ...mapState({
        selected: state => state.selectedTab
      })
    },
    methods: {
      updateTab(tab) {
        this.$store.dispatch('updateTab', tab)
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
