<template>
  <div class="tabs">
    <div class="tabs__menu">
      <div
        v-for="tab in tabs"
        :key="tab.name"
        @click="updateTab(tab.name)"
        class="tabs__menu-item"
        :class="{ 'active': ( selected == tab.name ) }"
        :aria-selected="selected == tab.name"
      >
        <div class="tabs__icon">
          <Icon :icon="tab.icon"></Icon>
        </div>
        <div class="tabs__title">{{ tab.name }}</div>
        <div class="tabs__arrow">
          <Icon :icon="'arrow'"></Icon>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Icon from '@/components/Icons/Icon.vue';
  export default {
    data() {
      return {
        tabs: [
          {
            name: 'M Creative Agency',
            icon: 'creative'
          },
          {
            name: 'Tax Program',
            icon: 'tax'
          },
          {
            name: 'Seminar Program',
            icon: 'seminars'
          },
          {
            name: 'State Program',
            icon: 'state'
          },
          {
            name: 'Federal Program',
            icon: 'federal'
          },
          {
            name: 'CPA Program',
            icon: 'cpa',
          },
          {
            name: 'Agents in the News',
            icon: 'news'
          }
        ],
      }
    },
    components: {
      Icon
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
