export default {
  async nuxtServerInit({ dispatch, commit}, { app }) {
    const data = await app.$axios.$get(`configs`)
    commit('SET_CONFIG', data)
  },

  async ARTICLE_LIST({ commit, state }) {
    const data  = await this.$axios.$get(`articles/`)
    return data
  },

  async ARTICLE_CERATE({ commit, state }, params) {
    const data  = await this.$axios.$post(`articles/`, params)
    return data
  },

  async ARTICLE_DETAIL({ commit, state }, id) {
    const data  = await this.$axios.$get(`articles/${id}/`)
    return data
  },

  async ARTICLE_UPDATE({ commit, state }, params) {
    let id = params.id
    const data  = await this.$axios.$put(`articles/${id}/`, params)
    return data
  },

  async ARTICLE_PARTIAL_UPDATE({ commit, state}, params) {
    let id = params.id
    const data  = await this.$axios.$patch(`articles/${id}/`, params)
    return data
  },

  async ARTICLE_DELETE({ commit, state}, id) {
    const data  = await this.$axios.$delete(`articles/${id}/`)
    return data;
  },

  async TAGS({ commit, state }) {
    const data  = await this.$axios.$get(`tags/`)
    return data
  },

  async TAG_CREATE({ commit, state }, params) {
    const data  = await this.$axios.$post(`tags/`, params)
    return data
  },

  async TAG_DETAIL({ commit, state }, id) {
    const data  = await this.$axios.$get(`tag/${id}/`)
    return data
  },

  async TAG_UPDATE({ commit, state }, params) {
    let id = params.id
    const data  = await this.$axios.$put(`tags/${id}/`, params)
    return data
  },

  async TAG_PARTIAL_UPDATE({ commit, state }, params) {
    let id = params.id
    const data  = await this.$axios.$patch(`tags/${id}/`, params)
    return data
  },

  async TAG_DELETE({ commit, state }, id) {
    const data  = await this.$axios.$delete(`tags/${id}/`)
    return data
  }
}
