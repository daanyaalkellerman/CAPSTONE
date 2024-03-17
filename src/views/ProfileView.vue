<template lang="">
    <body class="bodBack">
       <div class="profile" v-if="user">
        <div class="single">
           <div class="container p-0 justify-content-center">
                <div class=" justify-content-center">
                    <div class="container prof">
                        <div class="card text-center sidebar">
                            <div class="card-body">
                                <img :src=user.userUrl alt="" class="my-4">
                                <div class="card-text">
                                    <h3 class="my-4">{{user.firstName}} {{user.lastName}}</h3>
                                    <div class="but"> 
                                    <a @click="deleteMyUser(user.userID)" class="logBut bg-white my-3 p-2 px-5" style="border:1px solid #040B13">Delete </a>
                                    <a @click="logout" class="logBut bg-white my-3 p-2 px-5"style="border:1px solid #040B13" >Log Out</a>
                                </div>
                                  
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="container about">
                        <div class="inputs">
                            <h1>Profile</h1>
                            <form autocomplete="off" @submit.prevent="editUser" method="POST">
                                <p>First Name</p>
                                <input class="col-12 my-3" id="Name" type="text" v-model="user.firstName" required>
                                <p>Last Name</p>
                                <input class="col-12 my-3" id="Brand" type="text" v-model="user.lastName" required>
                                <p>Email Address</p>
                                <input class="col-12 my-3 emailAdd" id="Price" type="text" v-model="user.emailAdd" required>
                                <p>Profile Image</p>
                                <input class="col-12 my-3" id="img" type="text" v-model="user.userUrl" required>
                                <p>Password</p>
                                <input class="col-12 my-3" id="img" type="text" v-model="user.userPass" required>
                                <div class="modal-footer">
                                    <button  @click="this.$store.dispatch('editUser', user)" class="btn btn-dark" id="submit">Save Changes</button>
                                </div>
                            </form>
                                </div>
                            </div>
                        </div>
                        </div>
                        </div>
                    </div>
   </body>
</template>
<script>
import { loadRouteLocation } from 'vue-router';

export default {
    created(){
        const Profiler = $cookies.get('user');
        if(Profiler){
            this.user = $cookies.get('user')
        }
    },
    data() {
        return {
            firstName:null,
            lastName:null,
            userEmail:null,
            userProfile:null,
            userPass:null
        }
    },
   computed:{
       User(){
          return this.$store.state.User
         },
         logout(){
        this.$store.dispatch('logout')
      }
   },
    mounted() {
      this.$store.dispatch('getUsers')
    },
    methods: {
        deleteMyUser(userID){
        this.$store.dispatch('deleteMyUser',userID)
       
      },
    },
}
</script>
<style scoped>

.bodBack{
    background-color: #040B13 !important;
    min-height: 100%;
   width: auto;
   color: #D9D9D9;
   
}
.prof{
    justify-content: center !important;
}
.profile{
    justify-content: center;
    align-items: center;
    display: flex;
    /* overflow-x: hidden; */
    padding-top: 100px;
    min-height: 120vh;
    
}
form{
    width: 100%;
}
.card{
    max-width: 100%;
}

.card-body{
    height: 440px;
    background-color: #5889B0;
    color: #D9D9D9;
}

.card-body img{
    margin-top: 15px;
    width: 180px;
    height: 180px;
    border-radius: 50%;
}

.logOut{
    margin-top: 30px !important;
    border: 1px solid #040B13;
}

.about{
    max-width: 100%;
}
.inputs{
    width: 100%;
}

.aboutRow{
    padding: 10px;
    border-bottom: 1px solid black;
}

.aboutHead{
    font-size: 20px;
    font-weight: bold;
}

.col-8{
    word-wrap: break-word;   
    font-size: 18px;
}
.logBut{
            text-align: center;
            text-decoration: none;
            max-width: 100px !important;
            color: #040B13;
        }

        .logBut:hover{
            cursor: pointer;
            color: #040B13;
           opacity: 90%;
        }

    
</style>