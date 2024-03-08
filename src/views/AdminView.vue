<template lang="">
    <body class="bodBack">
      <section class="adminNexa">
        <div>
            <h2 class="tableTop">Users</h2>
          <AddModel/>
        </div>
        <!-- USER TABLE -->
        <div class="container" >
            <div class="row">
              <div class="col">
                <div class="table crud-table">
                  <table class="table align-middle container-sm table-bordered" >
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
                    <tbody v-if="Users">
                      <tr v-for="user in $store.state.Users" :key="user.userID">
                        <td data-label="First Name">{{user.firstName}}</td>
                        <td data-label="Last Name">{{user.lastName}}</td>
                        <td data-label="Email">{{user.emailAdd}}</td>
                        <td data-label="Role">{{user.userRole}}</td>
                        <td data-label="Image"><img :src=user.userUrl alt=""></td>
                        <td data-label="Edit"><EditModel/><button class="delBtn">Del</button></td>
                      </tr>
                    </tbody>
                    <tbody v-else>
            <SpinnerView/>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          
          <!-- PRODUCT TABLE -->
          <div>
            <h2 class="tableTop">Products</h2>
            <button type="button" class="btn btn-secondary my-2" data-bs-toggle="modal" data-bs-target="#exampleModal1">Add Product</button>
        </div>
        <div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">Add Product</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="setTimeout()"></button>
                </div>
                <div class="modal-body">
                    <!-- @submit.prevent="addUser" -->
                  <form  method="POST" class="mx-4 my-5"> 
                        <div class="row">
                <div class="col">
                    <p>Product Name</p>
                  <input type="text" class="form-control" v-model="prodName" name="prodName"  aria-label="prodName" required="">
                </div>
              </div>
                <div class="row">
                  <div class="col">
                      <p>Description</p>
                    <input type="text" class="form-control" v-model="prodDes" name="prodDes" aria-label="prodDes" required="">
                  </div>
                </div>
                <div class="row">
                  <div class="col">
                      <p>Image Url</p>
                    <input type="text" class="form-control"  v-model="image" name="image" aria-label="image" required="">
                  </div>
                </div>
              <div class="row">
                <div class="col">
                    <p>Category</p>
                  <input type="text" class="form-control" v-model="category" name="category"  aria-label="Category" required="">
                </div>
              </div>
              <div class="row">
                <div class="col">
                    <p>Price</p>
                  <input type="text" class="form-control"  v-model="price" name="price" aria-label="Price" required="">
                </div>
              </div>
              <div class="modal-footer">
              <button type="submit" class="btn btn-dark"><span id="logs">Create product</span></button>
            </div>
        
        </form>
                </div> 
            </div>
            </div>
            </div>
          <div class="container">
            <div class="row">
              <div class="col">
                <div class="table crud-table">
                  <table class="table align-middle container-sm table-bordered">
                    <thead class="thead">
                      <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Image</th>
                        <th>Edit</th>
                      </tr>
                    </thead>
                    <tbody class="">
                      <tr>
                        <td data-label="Name  ">Daanyaal</td>
                        <td data-label="Description">Kellerman</td>
                        <td data-label="Category">Hatchback</td>
                        <td data-label="Price">R100000</td>
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
import SpinnerView from '../components/SpinnerView.vue';
import AddModel from '../components/AddUsermodel.vue';
import EditModel from '../components/EditUsermodal';
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
      user:null,
      prodName:null,
      prodDes:null,
      price:null,
      category:null
    }
  },
  methods: {
   
  },
    components:{
      SpinnerView,AddModel,EditModel
    },
    computed:{
      Users(){
       return this.$store.state.Users
      }
    },
    mounted() {
      this.$store.dispatch('getUsers')
    },
 
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
        background: #5889B0;
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