<template lang="">
   <body class="bodBack">
    <div class="profile">
        <div class="single">
           <div class="main container justify-content-center">
                <div class="row justify-content-center">
                    <div class="col-md-4 my-5 mt-1 prof">
                        <div class="card text-center sidebar">
                            <div class="card-body">
                                <img src="https://i.postimg.cc/nrFmZRZj/itl-cat-wallpaper-de-carros-3153463-1.jpg" alt="" class="my-4">
                                <div class="card-text">
                                    <h3 class="my-4">user frist name and user lastname</h3>
                              
                                    <a href="" class="logBut bg-white my-3 p-2 px-5" >click Log Out</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-8 my-5 mt-1 about">
                        <div class=" mx">
                            <h1>Profile</h1>
                            <form autocomplete="off" @submit.prevent="editUser" method="POST">
                                <p>First Name</p>
                                <input class="col-12 my-3" id="Name" type="text" v-model="firstName" required>
                                <p>Last Name</p>
                                <input class="col-12 my-3" id="Brand" type="text" v-model="lastName" required>
                                <p>Email Address</p>
                                <input class="col-12 my-3 emailAdd" id="Price" type="text" v-model="userEmail" required>
                                <p>Profile Image</p>
                                <input class="col-12 my-3" id="img" type="text" v-model="userProfile" required>
                                <div class="modal-footer">
                                    @click="this.$store.dispatch('editUser', user)"
                                    <button class="btn btn-dark" id="submit">Save Changes</button>
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
export default {
    
}
</script>
<style scoped>

.bodBack{
    background-color: #040B13 !important;
    min-height: 100%;
   width: auto;
   color: white;
   
}
.prof{
    justify-content: center !important;
}
.profile{
    justify-content: center;
    align-items: center;
    /* overflow-x: hidden; */
    padding-top: 100px;
    min-height: 120vh;
}

.card{
    max-width: 100%;
}

.card-body{
    height: 445px;
    background-color: #5889B0;
    color: white;
}

.card-body img{
    margin-top: 15px;
    width: 180px;
    height: 180px;
    border-radius: 50%;
}

.logOut{
    margin-top: 30px !important;
}

.about{
    max-width: 100%;
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
            color: rgb(0, 0, 0);
        }

        .logBut:hover{
            color: rgb(0, 0, 0);
           opacity: 90%;
        }

    
</style>