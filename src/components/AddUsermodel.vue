<template lang="">
      <button type="button" class="btn btn-secondary my-2" data-bs-toggle="modal" data-bs-target="#exampleModal">Add User</button>
           <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">Add User</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="setTimeout()"></button>
                </div>
                <div class="modal-body">
                    <!-- @submit.prevent="addUser" -->
                  <form  method="POST" class="mx-4 my-5"> 
                        <div class="row">
                <div class="col">
                    <p>FirstName</p>
                  <input type="text" class="form-control" v-model="firstName" name="firstName"  aria-label="First name" required="">
                </div>
              </div>
                <div class="row">
                  <div class="col">
                      <p>LastName</p>
                    <input type="text" class="form-control" v-model="lastName" name="lastName" aria-label="Last name" required="">
                  </div>
                </div>
              <div class="row">
                <div class="col">
                    <p>Email</p>
                  <input type="text" class="form-control" v-model="email" name="userEmail"  aria-label="First name" required="">
                </div>
              </div>
              <div class="row">
                <div class="col">
                    <p>Password</p>
                  <input type="password" class="form-control"  v-model="userPass" name="userPass" aria-label="Last name" required="">
                </div>
              </div>
              <div class="row">
                <div class="col">
                    <p>Password</p>
                  <input type="text" class="form-control"  v-model="image" name="userPass" aria-label="Image" required="">
                </div>
              </div>
              <div class="modal-footer">
              <button type="submit" class="btn btn-dark"><span id="logs">Create User</span></button>
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
        
        userID:null,
            userRole:null,
            firstName:null,
            lastName:null,
            email:null,
            image:null,
            userPass:null,
            user:null
      }
    },  
}
</script>
<style scoped>
     .modal-content{
    background: white;
  }
  .modal-body p{
    margin: 0;
    padding: 0;
    font-size: 20px;
    color: black;
  }
  
  .modal-body input{
      width: 100%;
      margin-bottom: 20px;
      background-color: transparent;
      border: none;
      border-bottom: 1px solid black;
      outline: none;
      height: 40px;
      color: black;
  
  }
  .modal-body textarea{
    justify-content: end;
    width: 100%;
      margin-bottom: 20px;
      background-color: transparent;
      border: none;
      border-bottom: 1px solid white;
      outline: none;
      height: 40px;
      color: black;
    height: 150px;
  }

  .modal-body form input{
    border-radius: 0px;
  }
  
  .modal-header{
    color: black;
    border-bottom: 0px;
  }
  
  .modal-footer{
    border-top: 0px;
  }
  
  .btn-close{
    background-color: black;
  }
</style>