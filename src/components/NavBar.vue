<template lang="">
        <nav class="navbar navbar-dark fixed-top" >
    <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button> 
        <span class="name animate__animated animate__backInDown"><img class="driveLogo" src="https://i.postimg.cc/RZbKphVJ/Screenshot-2024-03-05-142157.png"></span>
       <router-link to="/cart"> <i class="fa-solid fa-cart-shopping pe-4" id="cart"></i></router-link>
      <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel"></h5>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav justify-content-start flex-grow-1 pe-3">
            <li class="nav-item">
                <router-link v-if="!$cookies.get('jwt')"  to="/" class="nav-link">SignUp</router-link>
              </li>
            <li class="nav-item">
                <router-link v-if="$cookies.get('jwt')"  to="/profile" class="nav-link">Profile</router-link>
              </li>
            <li class="nav-item">
                <router-link v-if="!$cookies.get('jwt')" to="/login" class="nav-link">Login</router-link>
              </li>
            <li class="nav-item">
                <router-link v-if="$cookies.get('jwt')" to="/home" class="nav-link">Home</router-link>
            </li>
            <li class="nav-item">
                <router-link to="/about" class="nav-link">About</router-link>
            </li>
            <li class="nav-item">
                <router-link v-if="$cookies.get('jwt')"  to="/products" class="nav-link">Products</router-link>
            </li>
            <li class="nav-item"   >
                <router-link to="/contact" class="nav-link">Contact</router-link>
            </li>
            <li class="nav-item"
            >
                <router-link v-if="$cookies.get('jwt')"  to="/admin" class="nav-link">Admin</router-link>
            </li>
          </ul>
        </div>
        <div class="offcanvas-bottom">
          <router-link to="/"><button v-if="$cookies.get('jwt')" @click="logout" class="logout" >Logout</button></router-link>

        </div>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  mounted() {
    this.$store.dispatch('getUsers')
  },
    computed: {
      login(){
      this.$store.dispatch('login',this.$data)
    },
      Users(){
       return this.$store.state.Users
      },  
      logout(){
        this.$store.dispatch('logout')
      }
    },
}
</script>
<style scoped>

.driveLogo{
    width: 180px;
}
#cart{
  color: #D9D9D9;
}
.navbar{
    color: #D9D9D9;
    max-height: 130px;
    text-align: center;
    background-color: #040B13;
      opacity: 85%;
      text-align: left;
  }
  .nav-link{
    margin-top: 10px;
  }
  .offcanvas{
    width: 300px;
  }
.offcanvas-body{
    background-color: #040B13;
    width: 300px;
}
.offcanvas-header{
    background-color: #040B13;
    
}
.offcanvas-bottom{
  background-color: #040B13;
  justify-content: center;
  align-items: center;
  display: flex;
}
.logout{
  background-color:#D9D9D9;;
  color: #040B13;
  border: 2px solid #040B13;
  width: 100px;
  height: 40px;
}
@media (min-width:300px) and (max-width:600px){
  .driveLogo{
      width:130px;
  }
}

</style>