<template lang="">
    <body class="bodBack">
      <section class="adminNexa">
        <div>
            <h2 class="tableTop">User Information</h2>
            <button type="button" class="btn btn-secondary my-2" data-bs-toggle="modal" data-bs-target="#exampleModal">Add User</button>
        </div>
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
              <div class="modal-footer">
              <button type="submit" class="btn btn-dark"><span id="logs">Create User</span></button>
            </div>
        
        </form>
                </div> 
            </div>
            </div>
            </div>
        <!-- USER TABLE -->
        <div class="container">
            <div class="row">
              <div class="col">
                <div class="table crud-table">
                  <table class="table align-middle container-sm table-bordered">
                    <thead class="thead">
                      <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Image</th>
                        <th>Edit</th>
                      </tr>
                    </thead>
                    <tbody class="">
                      <tr>
                        <td data-label="First Name">Daanyaal</td>
                        <td data-label="Last Name">Kellerman</td>
                        <td data-label="Email">Kellermandaanyaal2@gmail.com</td>
                        <td data-label="Role">Admin</td>
                        <td data-label="Image"><img src="https://i.postimg.cc/66gMXvhq/tablet-2560x1700.jpg" alt=""></td>
                        <td data-label="Edit"><button class="editBtn">Edit</button><button class="delBtn">Del</button></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
    </section>
</body>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.tableTop{
    padding-top:80px
}
    .userH{
    display: flex;
    gap: 60px;
}
.adminNexa{
    min-height: 100vh;
    /* display: grid;
    place-items: center; */
    padding: 0;
 /* for checkout image */
    /* background-image: url(https://i.postimg.cc/vBsW0q9g/Upscales-ai-1709458709523.webp); */
    /* background-size: cover;
    background-position: center; */
 
  
    text-align: center;
    border-image: fill 1 linear-gradient(#040B13, rgba(0, 0, 0, 0.067));
    
}

.bodBack{
    background-color: #040B13;
   width: auto;
   color: white;
}
img{
    width: 70px;
  }
  

  .delBtn {
   background-color: #5889B0;
   padding: 4px 8px;
    color: #fff;
   border: 1px solid black;
  }
  .editBtn {
   background-color: #040B13;
   padding: 4px 8px;
    color: #fff;
   border: 1px solid black;
  }
  
  .modal-content{
    background: black;
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
  @media (min-width:600px) and (max-width:780px){
    .table{
        margin-left: 0;
        font-size:10px
    }

  
  }
  @media (max-width:600px){
    .tableTop{
    padding-top:60px
}
    .table thead{
        display: none !important;
      }
      
  
       .table, .table tbody, .table tr, .table td{
        display: block !important;
        width: 100% !important;
        
      }
  
      .table tr{
        background: black;
        margin-bottom: 20px !important;

      }
  
      .table tbody{
        background: white;
      }
  
      .table tbody tr td{
        text-align: right;
        position: relative;
        width: 100%;
      }
  
      .table td:before{
        display: block;
        color: #040B13;
        font-size: 20px;
        content: attr(data-label) !important;
        text-align: left;
        border-bottom: 1px solid black;
      }
  }
</style>