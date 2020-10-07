export const state = () => ({
  selectedTab: 'M Creative Agency'
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
