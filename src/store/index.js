import { createStore } from 'vuex'
import axios from 'axios'
import router from '@/router';
import { RouterLink } from 'vue-router';
// axios.defaults.withCredentials = true
const url = 'https://drive-nexa.onrender.com';

export default createStore({
  state: {
    Products:[],
    Users: [],
    User:[],
    cart:[],
    loggedIn:false
  },
  getters: {
  },
  mutations: {
    setProducts(state, data){
      state.Products = data
    },
    setUsers(state, data){
      state.Users = data
    },
    setUser(state, data){
      state.User = data
    },
    setLoggedUser(state, data){
      state.loggedIn = data
    }
  },
  actions: {
    async getUsers({commit}){
      let res = (await axios.get(`${url}/users`)).data;
      commit('setUsers', res)
    },
    async getUser({commit},userID){
      let res = (await axios.get(`${url}/users/`)).data
      commit('setUser',res)
    },
     deleteUser ({commit},userID){
      axios.delete(`${url}/users/${userID}`)
      alert('Click Ok to finalize deletion')
      window.location.reload()
    },
    async createUser ({commit},newUser){
      let {data} = await axios.post(url + '/users', newUser)
      alert(data.msg)
      
      window.location.assign('/login')
    },
    async editUser ({commit},patch){
      await axios.patch(url+'/users/' + patch.userID , patch)
      window.location.reload()
    },
    async getProducts({commit}){
      let res = (await axios.get(`${url}/products`)).data
        commit('setProducts',res)
    },
    async createProd({commit}, newProd){
      let {data} = await axios.post(url + '/products' , newProd)
      alert(data.msg)
      window.location.reload()
    },
    async editProd({commit}, patch){
      await axios.patch(url+ '/products/'+ patch.prodID,patch)
      alert('Edit MADE')
      window.location.reload()
    },
    async deleteProd({commit},prodID){
      axios.delete(`${url}/products/${prodID}`)
      alert('Click Ok to finalize deletion')
      window.location.reload()
    },
    async login({commit},loggedIn){
        let {data} = await axios.post(url+'/login',loggedIn)
        $cookies.set('jwt',data.tokenSign)
          alert(data.msg)
          // window.location.assign('/home')  
          window.location.replace('/home')
 },
    async logout(context){
      let cookies = $cookies.keys()
      $cookies.remove('jwt')
      window.location.assign('/login')
    }
  },
  modules: {
  }
})
