<template lang="">
            <button type="button" class="btn btn-secondary my-2" data-bs-toggle="modal" data-bs-target="#exampleModal1">Add Product</button>
        <div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">Add Product</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <!--  -->
                  <form @submit.prevent="createProd" method="POST" class="mx-4 my-5"> 
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
                    <input type="text" class="form-control"  v-model="prodUrl" name="image" aria-label="image" required="">
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
                    <p>Quantity</p>
                  <input type="text" class="form-control" v-model="quantity" name="quantity"  aria-label="Quantity" required="">
                </div>
              </div>
              <div class="row">
                <div class="col">
                    <p>Price</p>
                  <input type="text" class="form-control"  v-model="price" name="price" aria-label="Price" required="">
                </div>
              </div>
              <div class="modal-footer">
              <button @click="createProd" class="btn btn-dark"><span id="logs">Create product</span></button>
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
            prodName:null,
            prodDes:null,
            prodUrl:null,
            category:null,
            quantity:null,
            price:null
            
        }
    },
    computed: {
        createProd(){
            this.$store.dispatch('createProd',this.$data)
        }
    },
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