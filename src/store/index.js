import { createStore } from 'vuex'
import axios from 'axios'
import router from '@/router';
import sweet from 'sweetalert'

// axios.defaults.withCredentials = true
const url = 'https://drive-nexa.onrender.com';

export default createStore({
  state: {
    Products:[],
    Product:null,
    Users: [],
    User:[],
    Reviews:[],
    cart:null,
    setloggedIn:false
  },
  getters: {
  },
  mutations: {
    setProducts(state, data){
      state.Products = data
    },
    setProduct(state, data){
      state.Product = data
    },
    setUsers(state, data){
      state.Users = data
    },
    setUser(state, data){
      state.User = data
    },
    setReviews(state, data){
      state.Reviews = data
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
         title: 'Success',
         icon:'success',
         text:'User deleted successfuly',
         timer:40000
         
       })
       window.location.reload()
     }catch(e){
       sweet({
         title:'Error',
         icon:'error',
         text:'Failed to delete user',
         timer: 4000
       })
   
     }
   },
    deleteMyUser ({commit},userID){
     try{
       axios.delete(`${url}/users/${userID}`)
       let cookies = $cookies.keys()
       $cookies.remove('jwt')
       sweet({
         title: 'Success',
         icon:'success',
         text:'User deleted successfuly',
         timer:40000
         
        })
        window.location.assign('/')
      }catch(e){
        sweet({
         title:'Error',
         icon:'error',
         text:'Failed to delete user',
         timer: 4000
       })
       window.location.reload()
   
     }
   },
    async createUser ({commit},newUser){
      try{
        let {data} = await axios.post(url + '/users', newUser)
        sweet({
          title:'Success',
          icon:'success',
          text:'Created User successfully',
          timer:40000
        })
        window.location.reload()
      }catch(e){
        sweet({
          title:'Error',
          icon:'error',
          text:'Failed to create User',
          timer:40000
        })
        window.location.reload()
      }
      
    },
    async editUser ({commit},patch){
      try{
        await axios.patch(url+'/users/' + patch.userID , patch)
        sweet({
          title:'Success',
          icon:'success',
          text:'Edit was successful',
          timer:40000
        })
        window.location.reload()
      }catch(e){
        sweet({
          title:'Error',
          icon:'error',
          text:'Failed to edit user',
          timer:40000
        })
        window.location.reload()
      }
    },
    async getProducts({commit}){
      let res = (await axios.get(`${url}/products`)).data
      commit('setProducts',res)
    },
    async getProduct(context,proD){
      let res = (await axios.get(`${url}/products/${proD.id}`)).data
      context.commit('setProduct',res[0])
    },
    async createProd({commit}, newProd){
      try{
        let {data} = await axios.post(url + '/products' , newProd)
        sweet({
          title:'Success',
          icon:'success',
          text:'Product created successfully',
          timer:50000
        })
        window.location.reload()
      }catch(e){
        sweet({
          title:'Error',
          icon:'error',
          text:'Failed to create product',
          timer:50000
        })
        window.location.reload()
      }
    },
    async editProd({commit}, product){
      try{
        await axios.patch(url+ '/products/'+ product.prodID,product)
        sweet({
          title:'Success',
          icon:'success',
          text:'Edit was successful',
          timer:50000
        })
        window.location.reload()
      }catch(e){
        sweet({
          title:'Error',
          icon:'error',
          text:'Failed to edit product',
          timer:50000
        })
        window.location.reload()
      }
    },
    async deleteProd({commit},prodID){
      try{
        axios.delete(`${url}/products/${prodID}`)
        sweet({
          title:'Success',
          icon:'success',
          text:'Product deleted successfully',
          timer:50000
        })
        window.location.reload()
      }catch(e){
        sweet({
          title:'Error',
          icon:'error',
          text:'Error when deleting product',
          timer:50000
        })
      }
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
          timer:50000
        })
        window.location.reload()
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
        window.location.reload()

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
    },
    async reviews({commit}){
      let rev = (await axios.get(`${url}/reviews`)).data
      commit('setReviews',rev)
    },
    async addRev({commit}, newRev){
      let {data} = await axios.post(url + '/reviews', newRev)
      window.location.reload()
    },
    deleteRev({commit},revID){
      axios.delete(`${url}/reviews/${revID}`)
      window.location.reload()
    }
  },
  modules: {
  }
})
