import { createStore } from 'vuex'
import axios from 'axios'
const baseUrl = 'https://drive-nexa.onrender.com';
export default createStore({
  state: {
    products:[],
    Users: [],
    User:[],
    cart:[]
  },
  getters: {
  },
  mutations: {
    setProducts(state, data){
      state.products = data
    },
    setUsers(state, data){
      state.Users = data
    },
    setUser(state, data){
      state.User = data
    }
  },
  actions: {
    async getUsers({commit}){
      let res = (await axios.get(`${baseUrl}/users`)).data;
      commit('setUsers', res)
    },
    async getUser({commit},userID){
      let res = (await axios.get(`${baseUrl}/users/`)).data
      commit('setUser',res)
      console.log(res)
    },
    deleteUser({commit},userID){
      axios.delete(`${baseUrl}/users/${userID}`)
      window.location.reload()
    },
    async createUser({commit},newUser){
      let {data} = await axios.post(baseUrl + '/users',newUser)
      window.location.reload()
    },
    async editUser ({commit},patch){
      await axios.patch(baseUrl+'/users/' + patch.userID,patch)
      window.location.reload()
    },
    getProducts({commit}){
      axios.get(baseUrl + '/products')
      .then(res => {
        commit('setProducts',res.data)
      })
    }
  },
  modules: {
  }
})
