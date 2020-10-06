export const state = () => ({
  selectedTab: 'Tax Program'
})

export const mutations = {
  SET_TAB(state, tab) {
    state.selectedTab = tab
  }
}

export const actions = {
  updateTab({ commit }, tab) {
    commit('SET_TAB', tab)
  }
}
