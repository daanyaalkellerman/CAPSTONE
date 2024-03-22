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
                    <tbody>
                      <tr v-for="(product,index) in cart" :key="product.prodID">
                        <td data-label="Image">  <img :src="product.prodUrl" alt=""></td>
                        <td data-label="Product">{{product.prodName}}</td>
                        <td data-label="Price">R{{product.price}}</td>
                        <td data-label="Quantity">{{product.quantity}}</td>
                        <td data-label="Delete" ><button @click="delCart(index)" class="delBtn">Del</button></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <button @click="bought()" class="btn btn-success my-5 buy col animate__animated animate__pulse">PURCHASE</button>
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
        return this.$store.state.cart
      },
      total(){
        return this.cart.reduce((total,prod)=>{
          return total + prod.price
        }, 0)
      }
  
    },
    methods: {
      delCart(index){
        this.$store.dispatch('deleteItem',index)
        localStorage.setItem('cart',JSON.stringify(this.cart))
      },
      bought(){
        this.$store.dispatch('purchase')
        localStorage.clear()
      }
    //   fetchCart(){
    //     this.$store.dispatch('thisCart')
    //   }
    // },
    // mounted() {
    //   this.fetchCart()
    // },
    }
}
</script>
<style scoped>
.bodBack{
    background-color: #040B13;
   width: auto;
   color: #D9D9D9;
}

.buy{
    padding: 5px;
    border: 1px solid #d9d9d9;
    color: #d9d9d9;
    background-color: #5889B0;
    font-size:14px;
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