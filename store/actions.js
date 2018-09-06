import axios from 'axios'

export default {
  async nuxtServerInit({ dispatch, commit, getters}, { req, res }) {
    const { data } = await axios.get(`${getters.baseUrl}/configs`)
    commit('SET_CONFIG', data)
  },

  async ARTICLE_LIST({ commit, state, getters }) {
    const { data } = await axios.get(`${getters.baseUrl}/articles`)
    return data
  },

  async ARTICLE_CERATE({ commit, state, getters }, params) {
    const { data } = await axios.post(`${getters.baseUrl}/articles`, params)
    return data
  },

  async ARTICLE_DETAIL({ commit, state, getters }, id) {
    const { data } = await axios.get(`${getters.baseUrl}/articles/${id}`)
    return data
  },

  async ARTICLE_UPDATE({ commit, state, getters }, params) {
    let id = params.id
    const {data} = await axios.put(`${getters.baseUrl}/articles/${id}`, params)
    return data
  },

  async ARTICLE_PARTIAL_UPDATE({ commit, state, getters}, params) {
    let id = params.id
    const { data } = await axios.patch(`${getters.baseUrl}/articles/${id}`, params)
    return data
  },

  async ARTICLE_DELETE({ commit, state, getters}, id) {
    const { data } = await axios.delete(`${getters.baseUrl}/articles/${id}`)
    return data;
  },

  async TAGS({ commit, state, getters }) {
    const { data } = await axios.get(`${getters.baseUrl}/tags`)
    return data
  },

  async TAG_CREATE({ commit, state, getters }, params) {
    const { data } = await axios.post(`${getters.baseUrl}/tags`, params)
    return data
  },

  async TAG_DETAIL({ commit, state, getters }, id) {
    const { data } = await axios.get(`${getters.baseUrl}/tag/${id}`)
    return data
  },

  async TAG_UPDATE({ commit, state, getters }, params) {
    let id = params.id
    const { data } = await axios.put(`${getters.baseUrl}/tags/${id}`, params)
    return data
  },

  async TAG_PARTIAL_UPDATE({ commit, state, getters }, params) {
    let id = params.id
    const { data } = await axios.patch(`${getters.baseUrl}/tags/${id}`, params)
    return data
  },

  async TAG_DELETE({ commit, state, getters }, id) {
    const { data } = await axios.delete(`${getters.baseUrl}/tags/${id}`)
    return data
  }
}
