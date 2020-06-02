import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        token: null
    },

    mutations: {
        setToken(state, userData) {
            state.token = userData
            localStorage.setItem('token', JSON.stringify(userData))
            //   axios.defaults.headers.common.Authorization = `Bearer ${userData.token}`
        },

        clearUserData() {
            localStorage.removeItem('token')
            location.reload()
        }
    },

    actions: {
        login({ commit }, credentials) {
            return axios
                .post('/api/login', credentials)
                .then(({ data }) => {
                    commit('setToken', data)
                })
        },

        logout({ commit }) {
            commit('clearUserData')
        }
    },

    getters: {
        isLogged: state => !!state.token
    }
})