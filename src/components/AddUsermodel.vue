<template lang="">
      <button type="button" class="btn btn-secondary my-2" data-bs-toggle="modal" data-bs-target="#exampleModal">Add User</button>
           <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">Add User</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" ></button>
                </div>
                <div class="modal-body">
                    <!-- @submit.prevent="addUser" -->
                  <form @submit.prevent="createUser" method="POST" class="mx-4 my-5"> 
                        <div class="row">
                <div class="col">
                    <p>FirstName</p>
                  <input type="name" class="form-control" v-model="firstName" name="firstName"  aria-label="firstName" required="">
                </div>
              </div>
                <div class="row">
                  <div class="col">
                      <p>LastName</p>
                    <input type="name" class="form-control" v-model="lastName" name="lastName" aria-label="lastName" required="">
                  </div>
                </div>
                <div class="row">
                  <div class="col">
                      <p>Age</p>
                    <input type="age" class="form-control" v-model="userAge" name="age" aria-label="age" required="">
                  </div>
                </div>
              <div class="row">
                <div class="col">
                    <p>Email</p>
                  <input type="email" class="form-control" v-model="emailAdd" name="userEmail"  aria-label="emailAdd" required="">
                </div>
              </div>
              <div class="row">
                <div class="col">
                    <p>Image</p>
                  <input type="text" class="form-control"  v-model="userUrl" name="userUrl" aria-label="userUrl">
                </div>
              </div>
              <div class="row">
                <div class="col">
                    <p>Role</p>
                  <input type="text" class="form-control"  v-model="userRole" name="userRole" aria-label="userRole" >
                </div>
              </div>
              <div class="row">
                <div class="col">
                    <p>Password</p>
                  <input type="password" class="form-control"  v-model="userPass" name="userPass" aria-label="userPass" required="">
                </div>
              </div>
              <div class="modal-footer">
              <button @click="createUse" class="btn btn-dark"><span id="logs">Create User</span></button>
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
        firstName:null,
        lastName:null,
        emailAdd:null,
        userUrl:'https://iili.io/JW1yDog.jpg',
        userRole:'user',
        userPass:null,
        userAge: null
      }
    },  
    computed:{
      createUse(){
        this.$store.dispatch('createUser', this.$data)
      }
    }
}
</script>
<style scoped>
     .modal-content{
    background: #D9D9D9;
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
      border-bottom: 1px solid #D9D9D9;
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