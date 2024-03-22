import { createStore } from 'vuex'
import axios from 'axios'
import sweet from 'sweetalert'
// axios.defaults.withCredentials = true
const thisCart = JSON.parse(localStorage.getItem('cart')) || []
const url = 'https://drive-nexa.onrender.com';

export default createStore({
  state: {
    Products:[],
    Product:null,
    Users: [],
    User:[],
    Reviews:[],
    cart:thisCart,
    setloggedIn:false
  },
  getters: {
  },
  mutations: {
    sortPrice: (state) => {
      state.Products.sort((a, b)=> {
        return a.price - b.price;
      })
      if(!state.asc) {
        state.Products.reverse()
      }
      state.asc =!state.asc
    },
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
    setCart(state,Product){
      state.cart.push(Product)
    },
    delCart(state,ProductIndex){
      state.cart.splice(ProductIndex,1)
    },
    setLoggedIn(state, data){
      state.loggedIn = data
    }
  },
  actions: {
    //THE USER







    async getUsers({commit}){
        let res = (await axios.get(`${url}/users`)).data;
        commit('setUsers', res)   
    },
    async getUser({commit}){
      let res = (await axios.get(`${url}/users`)).data
      commit('setUser',res)
    },
  async  deleteUser ({commit},userID){
     try{
       axios.delete(`${url}/users/${userID}`)
      await sweet({
         title: 'Success',
         icon:'success',
         text:'User deleted successfuly',
         timer:40000
         
       })
       window.location.reload(40000)
     }catch(e){
      await sweet({
         title:'Error',
         icon:'error',
         text:'Failed to delete user',
         timer: 4000
       })
   
     }
   },
   async deleteMyUser ({commit},userID){
     try{
       axios.delete(`${url}/users/${userID}`)
       let cookies = $cookies.keys()
       $cookies.remove('jwt')
       $cookies.remove('user')
       $cookies.remove('userRole')
      await sweet({
         title: 'Success',
         icon:'success',
         text:'User deleted successfuly',
         timer:40000
         
        })
        window.location.assign('/')
      }catch(e){
       await sweet({
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
       await sweet({
          title:'Success',
          icon:'success',
          text:'Created User successfully',
          timer:40000
        })
        window.location.reload()
      }catch(e){
       await sweet({
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
       await sweet({
          title:'Success',
          icon:'success',
          text:'Edit was successful',
          timer:40000
        })
        window.location.reload()
      }catch(e){
       await sweet({
          title:'Error',
          icon:'error',
          text:'Failed to edit user',
          timer:40000
        })
        window.location.reload()
      }
    },
    //THE PRODUCTS








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
       await sweet({
          title:'Success',
          icon:'success',
          text:'Product created successfully',
          timer:40000
        })
        window.location.reload()
      }catch(e){
       await sweet({
          title:'Error',
          icon:'error',
          text:'Failed to create product',
          timer:40000
        })
        window.location.reload()
      }
    },
    async editProd({commit}, product){
      try{
        await axios.patch(url+ '/products/'+ product.prodID,product)
       await sweet({
          title:'Success',
          icon:'success',
          text:'Edit was successful',
          timer:40000
        })
        window.location.reload()
      }catch(e){
       await sweet({
          title:'Error',
          icon:'error',
          text:'Failed to edit product',
          timer:40000
        })
        window.location.reload()
      }
    },
    async deleteProd({commit},prodID){
      try{
        axios.delete(`${url}/products/${prodID}`)
       await sweet({
          title:'Success',
          icon:'success',
          text:'Product deleted successfully',
          timer:40000
        })
        window.location.reload()
      }catch(e){
       await sweet({
          title:'Error',
          icon:'error',
          text:'Error when deleting product',
          timer:40000
        })
      }
    },




    //THE LOGIN






    async signUser ({commit},sign){
      try{
        let {data} = await axios.post(url + '/users', sign)
       await sweet({
          title:'Account Created',
          icon:'success',
          text:'Signed in successfully',
          timer:40000
        })
          window.location.assign('/login')
      }catch(e){
       await sweet({
          title:'Error',
          icon:'error',
          text:'Account exists with that email',
          timer:40000
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
        let [{userID}] = data.user;
        $cookies.set('userID', userID)
        let [user] = data.user;
        $cookies.set('user',user)
        commit('setLoggedIn',true)
       await sweet({
          title:'Login',
          icon:'success',
          text:'Login Successfully',
          timer:40000
        })
        window.location.assign('/home')
         
      }catch(err){
       await sweet({
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
        $cookies.remove('userID')
        $cookies.remove('userRole')
        await sweet({
          title:'Logout',
          icon: 'success',
          text: 'Logged out successfully',
          timer: 40000
        })
        window.location.assign('/login')
      }catch(e){
       await sweet({
          title:'Error',
          icon:'error',
          text:'Error when logging out',
          timer:40000
        })
      }
    },




    //THE REVIEWS




    async reviews({commit}){
      let rev = (await axios.get(`${url}/reviews`)).data
      commit('setReviews',rev)
    },
    async addRev({commit}, newRev){
      try{
        let {data} = await axios.post(url + '/reviews', newRev)
       await sweet({
          title:'Success',
          icon:'success',
          text:'Added your review',
          timer:40000
        })
        window.location.reload('')
      
      }catch(e){
       await sweet({
          title:'Error',
          icon:'error',
          text:'Error when adding your review',
          timer:40000
        })
        window.location.reload(60000)
      }
    },
   async deleteRev({commit},revID){
      try{
        await axios.delete(`${url}/reviews/${revID}`)
       await sweet({
          title:'Success',
          icon:'success',
          text:'Deleted review',
          timer:40000
        })
        window.location.reload(80000)
      }catch(e){
         await sweet({
            title:'Error',
            icon:'error',
            text:'Error when deleting review',
            timer:40000
          })
      }
    },




    //THE CART




   async addCart(context,prod){
    try{
      context.commit('setCart', prod)
      localStorage.setItem('cart', JSON.stringify(context.state.cart))
      await sweet({
        title: 'Success',
        icon: 'success',
        text: 'Successfully added',
        timer: '40000'
      })
      window.location.reload()
    }catch(e){
    await sweet({
    title: 'Error',
    icon: 'error',
    text: 'Nothing in cart',
    timer:40000
    })
    }
  },
    async fetchCart({commit}){
      const data = await axios.get(url + '/cart');
      window.location.reload()
    },
    async deleteItem(context,item){
      try{
        context.commit('delCart', ProductIndex)
        sweet({
          title:'Success',
          icon:'success',
          text:'Deleted successfully',
          timer:40000
        })
        window.location.reload()
      }catch(e){
        sweet({
          title:'Error',
          icon:'error',
          text:'Error when deleting',
          timer:40000
        })
      }
    },
    async thisCart(context){
      const res = await axios.get(`${url}/cart/${$cookies.get('userID')}`);
      let fullCart = res.data.Products;
      context.commit('setCart', fullCart) 
    },
    // async purchaseCart({commit},userID){
    //   await axios.delete(`${url}/cart/${userID}`)
    // },
    // async editQuan({commit},quan){
    //   await axios.patch(url + '/cart' + quan.cartID,quan)
    // }
    async purchase(req,res){
     await sweet({
        title:'Success',
        icon:'success',
        text:'Thank You for purchasing',
        timer:40000
      })
      window.location.reload()
    },
  },
  modules: {
  }
})
