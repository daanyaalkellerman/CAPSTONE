import { createStore } from 'vuex'
import axios from 'axios'
const BASE_URL= 'https://drive-nexa.onrender.com';
export default createStore({
  state: {
    products:[],
    users:[],
    cart:[]
  },
  getters: {
  },
  mutations: {
    setProducts(state, data){
      state.products = data
    },
    setUsers(state, data){
      state.users = data
    }
  },
  actions: {
    getProducts({commit}){
      axios.get(BASE_URL + '/products')
      .then(res => {
        commit('setProducts',res.data)
      })
    },
    getUsers({commit}){
      axios.get(BASE_URL + '/users')
      .then(res => {
        console.log(res.data);
        commit('setUsers', res.data)
      })
    } 
  },
  modules: {
  }
})
