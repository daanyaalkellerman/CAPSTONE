import { createStore } from 'vuex'
import axios from 'axios'
import router from '@/router';
import sweet from 'sweetalert'

// axios.defaults.withCredentials = true
const url = 'https://drive-nexa.onrender.com';

export default createStore({
  state: {
    Products:[],
    Users: [],
    User:[],
    cart:null,
    setloggedIn:false
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
    setLoggedIn(state, data){
      state.loggedIn = data
    }
  },
  actions: {
    async getUsers({commit}){
      let res = (await axios.get(`${url}/users`)).data;
      commit('setUsers', res)
    },
    async getUser({commit}){
      let res = (await axios.get(`${url}/users`)).data
      commit('setUser',res)
    },
     deleteUser ({commit},userID){
      try{
        axios.delete(`${url}/users/${userID}`)
        sweet({
          title: 'Deletion',
          icon:'success',
          text:'User deleted successfuly',
          timer:400000
          
        })
        window.location.reload()
      }catch(e){
        sweet({
          title:'Failed',
          icon:'Error',
          text:'Failed to delete user',
          timer: 4000
        })
      }
    },
    async createUser ({commit},newUser){
      let {data} = await axios.post(url + '/users', newUser)
      alert(data.msg)
      window.location.reload()
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
    async editProd({commit}, product){
      await axios.patch(url+ '/products/'+ product.prodID,product)
      alert('Edited')
      window.location.reload()
    },
    async deleteProd({commit},prodID){
      axios.delete(`${url}/products/${prodID}`)
      alert('Click Ok to finalize deletion')
      window.location.reload()
    },
    async signUser ({commit},sign){
      try{
        let {data} = await axios.post(url + '/users', sign)
        sweet({
          title:'Account Created',
          icon:'Success',
          text:'Signed in successfully',
          timer:40000
        })
          window.location.assign('/login')
      }catch(e){
        sweet({
          title:'Error',
          icon:'Error',
          text:'Account exists with that email',
          timer:40000
        })
      }
    },
    async login({commit},loggedIn){
      try{
        let {data} = await axios.post(url+'/login',loggedIn)
        $cookies.set('jwt',data.tokenSign)
        let [{userRole}] = data.user;
        $cookies.set('userRole', userRole)
        let [user] = data.user;
        $cookies.set('user',user)
        commit('setLoggedIn',true)
        sweet({
          title:'Login',
          icon:'success',
          text:'Login Successfully',
          timer:40000
        })
        window.location.assign('/home')
        await router.push('/home')
         
      }catch(err){
        sweet({
          title:'Error',
          icon:'error',
          text:'Incorrect Details',
          timer:40000
        })


      }
 },
    async logout(context){
      try{
        let cookies = $cookies.keys()
        $cookies.remove('jwt')
        $cookies.remove('user')
        $cookies.remove('userRole')
        window.location.assign('/login')
        sweet({
          title:'Logout',
          icon: 'success',
          text: 'Logged out successfully',
          timer: 40000
        })
      }catch(e){
        sweet({
          title:'Error',
          icon:'error',
          text:'Error when logging out',
          timer:40000
        })
      }
    }
  },
  modules: {
  }
})
