<template lang="">
    <body class="bodBack">
      <!-- <section class="signup">
        <form @submit.prevent="signin" class="form">
            <span class="title">Register</span>
            <label for="firstname" class="label">First Name</label>
            <input type="text" id="firstname" name="firstname" v-model="firstName" required="" class="input">
            <label for="firstname" class="label">Last Name</label>
            <input type="text" id="lastname" name="lastname" required="" v-model="lastName" class="input">
            <label for="age" class="label">Age</label>
            <input type="text" id="age" name="age" required="" v-model="userAge" class="input">
            <label for="email" class="label">Email</label>
            <input type="email" id="email" name="email" required="" v-model="emailAdd" class="input">
            <label for="password" class="label">Password</label>
            <input type="password" id="password" name="password" required="" v-model="userPass" class="input">
            <button @click="signin" class="send">Register</button>
          </form>
    </section> -->
      <section class="signup">
        <form @submit.prevent='login' class="form" action="">
            <span class="title">Login</span>
            <label for="email" class="label">Email</label>
            <input type="email" id="email" name="email" required="email" v-model="emailAdd" class="input">
            <label for="password" class="label">Password</label>
            <input type="password" id="password" name="password" required="password" v-model="userPass" class="input">
            <button @click="login" class="send">Login</button>
            <p>Dont have an account?<router-link to="/">Sign Up</router-link></p>
          </form>
    </section>
</body>
</template>
<script>
export default {
  data(){
    return{
      emailAdd:null,
      userPass:null
        // firstName:null,
        // lastName:null,
        // emailAdd:null,
        // userUrl:'',
        // userRole:'',
        // userPass:null,
        // userAge: null
    }
  },
  computed:{
    login(){
      this.$store.dispatch('login',this.$data)
    },
    signin(){
      this.$store.dispatch('createUser', this.$data)

    }
  }
    
}
</script>
<style scoped>

.bodBack{
    background-color: #040B13;
   width: auto;
   color: #D9D9D9;
}

.signup{
    min-height:  95vh;
    display: grid;
    place-items: center;
    padding: 6rem;
    
    background-image: url(https://i.postimg.cc/nrFmZRZj/itl-cat-wallpaper-de-carros-3153463-1.jpg);
    background-size: cover;
    background-position: center;
 
  
    text-align: center;
    border-image: fill 1 linear-gradient(#040B13, rgba(0, 0, 0, 0.067));
    
}
.form {
    max-width: 380px;
    width: 100%;
    background-color: rgba(255, 255, 255,0.5);
    padding: 20px;
    box-shadow: 0px 2px 3px 2px rgba(255, 255, 255, 0.8);
    display: flex;
    flex-direction: column;
  }
  
  .title {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 20px;
    color: #1a202c;
  }
  
  .label {
    color: rgb(0, 0, 0);
    margin-bottom: 4px;
  }
  
  .input {
    padding: 10px;
    margin-bottom: 20px;
    width: 100%;
    font-size: 1rem;
    color: #4a5568;
    outline: none;
    border: 1px solid transparent;
    border-radius: 4px;
    transition: all 0.2s ease-in-out;
  }
  
  .input:focus {
    background-color:#D9D9D9;
    box-shadow: 0 0 0 2px #cbd5e0;
  }
  
  .input:valid {
    border: 1px solid green;
  }
  
  .input:invalid {
    border: 1px solid rgba(14, 14, 14, 0.205);
  }
  
  .send {
    background-color: #040B13;
    color: #D9D9D9;
    border: none;
    border-radius: 4px;
    padding: 10px 20px;
    font-size: 1.2rem;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
  }
  .send:hover{
    background-color: #5889B0;
    color:#040B13 ;
  }
    
  @media (min-width:290px) and (max-width:600px){
    .signup{
    min-height:  95vh;
    display: grid;
    place-items: center;
    padding: 0.5rem;
    
    background-image: url(https://i.postimg.cc/nrFmZRZj/itl-cat-wallpaper-de-carros-3153463-1.jpg);
    background-size: cover;
    background-position: center;
 
  
    text-align: center;
    border-image: fill 1 linear-gradient(#040B13, rgba(0, 0, 0, 0.067));
    
}
    .form {
        max-width: 380px;
        width: 100%;
        background-color: rgba(255, 255, 255,0.5);
        padding: 20px;
        box-shadow: 0px 2px 3px 2px rgba(255, 255, 255, 0.8);
        display: flex;
        flex-direction: column;
      }
      
      .title {
        text-align: center;
        font-size: 2rem;
        margin-bottom: 20px;
        color: #1a202c;
      }
      
      .label {
        color: rgb(0, 0, 0);
        margin-bottom: 4px;
      }
      
      .input {
        padding: 5px;
        margin-bottom: 10px;
        width: 100%;
        font-size: 1rem;
        color: #4a5568;
        outline: none;
        border: 1px solid transparent;
        border-radius: 4px;
        transition: all 0.2s ease-in-out;
      }
      
      .input:focus {
        background-color: #D9D9D9;
        box-shadow: 0 0 0 2px #cbd5e0;
      }
      
      .input:valid {
        border: 1px solid green;
      }
      
      .input:invalid {
        border: 1px solid rgba(14, 14, 14, 0.205);
      }
      
      .submit {
        margin-top:5px;
        background-color: #040B13;
        color: #D9D9D9;
        border: none;
        border-radius: 4px;
        padding: 10px 20px;
        font-size: 1.2rem;
        cursor: pointer;
        transition: all 0.2s ease-in-out;
      }
      .submit:hover{
        background-color: #5889B0;
        color:#040B13 ;
      }
          
  }
</style>