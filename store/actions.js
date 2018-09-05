import axios from 'axios'

export default {
  async nuxtServerInit({ dispatch, commit, getters}, { req, res }) {
    const { data } = await axios.get(`${process.env.baseUrl}/configs`)
    commit('SET_CONFIG', data)
  },
}
