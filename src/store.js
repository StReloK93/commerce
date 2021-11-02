import { createStore } from 'vuex'
import axios from 'axios'
axios.defaults.withCredentials = true
axios.defaults.baseURL = 'http://127.0.0.1:8000/api'
window.axios = axios

export default createStore({
	state() {
		return {
			user: null,
			error: null,
		}
	},
	getters: {
		userRole(state) {
			return state.user.role;
		}
	},

	mutations: {
		setUser(state, payload) {
			state.user = payload
		},
		pushNotification(state, payload) {
			state.error = payload
			setTimeout(function () {
				state.error = null
			}, 5000)
		}
	},
	actions: {
		//login axios request
		async login({ dispatch, commit }, payload) {
			var bearer = await axios.post('/login', payload)
			if (bearer.status == 200) {
				localStorage.setItem('token', bearer.data)
				await dispatch('getUser')

				return true
			}
			else if (bearer.status == 299) {
				commit('pushNotification', bearer.data)
				return false
			}
		},
		//register axios request
		async register({ dispatch, commit }, payload) {
			var bearer = await axios.post('/register', payload)
			if (bearer.status == 200) {
				localStorage.setItem('token', bearer.data)
				await dispatch('getUser')
				return true
			}
			else if (bearer.status == 299) {
				commit('pushNotification', bearer.data)
				return false
			}
		},
		async getUser({ commit }) {
			if (localStorage.getItem('token')) {
				axios.defaults.headers.common['Authorization'] = localStorage.getItem('token')
				await axios.get('user').then(res => {
					commit('setUser', res.data)
				})
			}
		},
		async logout({ commit }) {
			await axios.post('logout').then(() => {
				axios.defaults.headers.common['Authorization'] = null
				localStorage.removeItem('token')
				commit('setUser', null)
			})

		}
	},
})
