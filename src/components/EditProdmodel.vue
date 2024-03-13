<template lang="">
     <button type="button" class="editBtn" data-bs-toggle="modal" data-bs-target="#exampleModalEditProd">Edit</button>
           <div class="modal fade" id="exampleModalEditProd" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">Edit User</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body" v-for = "product in $store.state.Products" :key="product.prodID">
                    <!-- @submit.prevent="addUser" -->
                  <form @submit.prevent="editProd"  method="POST" class="mx-4 my-5"> 
                        <div class="row">
                <div class="col">
                    <p>Product Name</p>
                  <input type="text" class="form-control" v-model="product.prodName" name="Product Name"  aria-label="Product Name" required="">
                </div>
              </div>
                <div class="row">
                  <div class="col">
                      <p>Description</p>
                    <input type="text" class="form-control" v-model="product.prodDes" name="description" aria-label="Description" required="">
                  </div>
                </div>
                <div class="row">
                  <div class="col">
                      <p>Image</p>
                    <input type="text" class="form-control" v-model="product.prodUrl" name="image" aria-label="image" required="">
                  </div>
                </div>
              <div class="row">
                <div class="col">
                    <p>Category</p>
                  <input type="text" class="form-control" v-model="product.category" name="category"  aria-label="category" required="">
                </div>
              </div>
              <div class="row">
                <div class="col">
                    <p>Quantity</p>
                  <input type="number" class="form-control" v-model="product.quantity" name="quantity"  aria-label="quantity" required="">
                </div>
              </div>
              <div class="row">
                <div class="col">
                    <p>Price</p>
                  <input type="price" class="form-control" v-model="product.price" name="price"  aria-label="price" required="">
                </div>
              </div>
              <div class="modal-footer">
              <button  @click="this.$store.dispatch('editProd', product)" class="btn btn-dark"><span id="logs">Update User</span></button>
            </div>
        
        </form>
                </div>  
            </div>
            </div>
            </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .editBtn {
   background-color: #040B13;
   padding: 4px 8px;
    color: #D9D9D9;
   border: 1px solid black;
  }
</style>