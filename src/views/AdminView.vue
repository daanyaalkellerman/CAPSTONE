  <template lang="">
    <body class="bodBack">
      <section class="adminNexa">
        <div>
          <h2 class="tableTop">Users</h2> 
          <AddUserModel/>
        </div>
        <!-- USER TABLE -->
        <AdminGuide/>
        <div class="container" >
          <div class="row">
            <div class="col">
              <div class="table crud-table">
                <table class="table align-middle container-sm table-bordered" >
                  <thead class="thead">
                    <tr>
                      <th>First Name</th>
                      <th>Last Name</th>
                        <th>Age</th>
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
                        <td data-label="Age">{{user.userAge}}</td>
                        <td data-label="Email">{{user.emailAdd}}</td>
                        <td data-label="Role">{{user.userRole}}</td>
                        <td data-label="Image"><img :src=user.userUrl alt=""></td>
                        <td data-label="Edit" ><EditUserModel/><button @click="deleteUser(user.userID)" class="delBtn">Del</button></td>
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
          
          <div>
            <h2 class="tableTop">Products</h2>
          <AddProdModel/>
        </div>
          <!-- PRODUCT TABLE -->
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
                    <tbody v-if="Products">
                      <tr v-for="product in $store.state.Products" :key="product.prodID">
                        <td data-label="Product Name">{{product.prodName}}</td>
                        <td data-label="Description">{{product.prodDes}}</td>
                        <td data-label="Category">{{product.category}}</td>
                        <td data-label="Price">{{product.price}}</td>
                        <td data-label="Image"><img :src=product.prodUrl alt=""></td>
                        <td data-label="Edit"><EditProdModel/><button @click="deleteProd(product.prodID)" class="delBtn">Del</button></td>
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
    </section>
</body>
</template>
<script>
import SpinnerView from '../components/SpinnerView.vue';
import AddUserModel from '../components/AddUsermodel.vue';
import EditUserModel from '../components/EditUsermodal.vue';
import AddProdModel from '../components/AddProdmodel.vue';
import EditProdModel from '../components/EditProdmodel.vue';
import AdminGuide from '../components/AdminGuide.vue';
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
      prodUrl:null,
      price:null,
      category:null
    }
  },
  methods: {
   
  },
    components:{
      SpinnerView,AddUserModel,EditUserModel,AddProdModel,EditProdModel,AdminGuide
    },
    computed:{
      Users(){
       return this.$store.state.Users
      },  
      Products(){
        return this.$store.state.Products
      }
    },
    mounted() {
      this.$store.dispatch('getUsers')
      this.$store.dispatch('getProducts')
    },
    methods: {
      deleteUser(userID){
        this.$store.dispatch('deleteUser',userID)
      },
      deleteProd(prodID){
        this.$store.dispatch('deleteProd',prodID)
      },
      editUser(userID){
     let edit = {
         userID:userID,
       firstName:this.firstName,
         lastName:this.lastName,
         userAge:this.userAge,
         emailAdd:this.emailAdd,
         userUrl:this.userUrl,
         userRole:this.userRole
       }
       this.$store.dispatch('editUser',edit)
     }
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
   color: #D9D9D9;
}
img{
    width: 70px;
  }
  

  .delBtn {
   background-color: #5889B0;
   padding: 4px 8px;
    color: #D9D9D9;
   border: 1px solid black;
  }
  .editBtn {
   background-color: #040B13;
   padding: 4px 8px;
    color: #D9D9D9;
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
        background: #D9D9D9;
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