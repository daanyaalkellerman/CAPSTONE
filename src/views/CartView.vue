<template lang="">
 <body class="bodBack">
      <section class="adminNexa">
        <div>
            <h2 class="tableTop">CHECKOUT</h2>
        </div>
        <div class="container" >
            <div class="row">
              <div class="col">
                <div class="table crud-table">
                  <table class="table align-middle container-sm table-bordered" >
                    <thead class="thead">
                      <tr>
                        <th>Image</th>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Delete</th>
                      </tr>
                    </thead>
                    <tbody v-if="cart">
                      <tr v-for="prod in $store.state.cart" :key="prod.cartID">
                        <td data-label="Product">{{prod.prodUrl}}</td>
                        <td data-label="Product">{{prod.prodName}}</td>
                        <td data-label="Price">{{prod.price}}</td>
                        <td data-label="Quantity">{{prod.quantity}}</td>
                        <td data-label="Delete" ><button @click="deleteUser(prod.cartID)" class="delBtn">Del</button></td>
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
export default {
    components:{
        SpinnerView
    },
    computed:{
      cart(){
        return this.$store.state.Cart
      }
    },
    mounted() {
      this.$store.dispatch('displayCart')
    },
    methods: {
      
    },
}
</script>
<style scoped>
.bodBack{
    background-color: #040B13;
   width: auto;
   color: #D9D9D9;
}

.adminNexa{
    min-height: 100vh;
    /* display: grid;  */
    place-items: center;
    padding: 0;

    background-image: url(https://i.postimg.cc/vBsW0q9g/Upscales-ai-1709458709523.webp);
    background-size: cover;
    background-position: center;
 
  
    text-align: center;
    border-image: fill 1 linear-gradient(#040B13, rgba(0, 0, 0, 0.067));
    
}
.tableTop{
    padding-top:80px;
  font-size: 60px;
  font-weight:bold;
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
  
  @media (min-width:600px) and (max-width:780px){
    .table{
        margin-left: 0;
        font-size:10px
    }

  
  }
  @media (max-width:600px){
    .tableTop{
    padding-top:60px;
    font-size:50px;
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