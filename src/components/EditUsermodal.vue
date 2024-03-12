<template lang="">
        <button type="button" class="editBtn" data-bs-toggle="modal" data-bs-target="#exampleModalEdit">Edit</button>
           <div class="modal fade" id="exampleModalEdit" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">Edit User</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body" v-for = "user in $store.state.Users" :key="user.userID">
                    <!-- @submit.prevent="addUser" -->
                  <form @submit.prevent="editUser"  method="POST" class="mx-4 my-5"> 
                        <div class="row">
                <div class="col">
                    <p>FirstName</p>
                  <input type="text" class="form-control" v-model="user.firstName" name="firstName"  aria-label="First name" required="">
                </div>
              </div>
                <div class="row">
                  <div class="col">
                      <p>LastName</p>
                    <input type="text" class="form-control" v-model="user.lastName" name="lastName" aria-label="Last name" required="">
                  </div>
                </div>
                <div class="row">
                  <div class="col">
                      <p>Age</p>
                    <input type="text" class="form-control" v-model="user.userAge" name="age" aria-label="Age" required="">
                  </div>
                </div>
              <div class="row">
                <div class="col">
                    <p>Email</p>
                  <input type="text" class="form-control" v-model="user.emailAdd" name="userEmail"  aria-label="Email" required="">
                </div>
              </div>
              <div class="row">
                <div class="col">
                    <p>Image Url</p>
                  <input type="text" class="form-control" v-model="user.userUrl" name="Image"  aria-label="url" required="">
                </div>
              </div>
              <div class="row">
                <div class="col">
                    <p>User Role</p>
                  <input type="text" class="form-control" v-model="user.userRole" name="Role"  aria-label="role" required="">
                </div>
              </div>
              <div class="row">
                <div class="col">
                    <p>Password</p>
                  <input type="password" class="form-control" v-model="user.userPass" name="userPass"  aria-label="Password" required="">
                </div>
              </div>
              <div class="modal-footer">
              <button  @click="this.$store.dispatch('editUser', user)" class="btn btn-dark"><span id="logs">Update User</span></button>
            </div>
        
        </form>
                </div>  
            </div>
            </div>
            </div>
</template>
<script>
export default {
    data() {
        return {
            // firstName:null,
            // lastName:null,
            // emailAdd:null,
            // userUrl:null,
            // userAge:null,
            // userPass:null,
            // userID:null

        }
    },
    methods: {
    //      editUser(userID){
    //  let edit = {
    //      userID:userID,
    //      firstName:this.firstName,
    //      lastName:this.lastName,
    //      userAge:this.userAge,
    //      emailAdd:this.emailAdd,
    //      userUrl:this.userUrl,
    //      userRole:this.userRole
    //    }
    //    this.$store.dispatch('editUser',edit)
    //  }
    },
}
</script>
<style scoped>
 .editBtn {
   background-color: #040B13;
   padding: 4px 8px;
    color: #fff;
   border: 1px solid black;
  }
  
    
</style>