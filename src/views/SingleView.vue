<template lang="">
   <body class="bodBack">
    <div class="single">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 my-4">
                <div class="card">
                <img src="" alt="" class="card-img-top w-100" style="max-height: 320px;">
              </div>
                </div>
                <div class="col-lg-6 my-4">
                   <h2 class="title">prodname</h2>
                <p>description</p> 
                <div class="row mx-4">
                    <button class="col-6 price">price</button>
                    <button class="btn btn-success my-5 buy col-6" >@click="addToCart(product.id)</button>
                    <button class="col-6 contract my-5 btn btn-secondary">Contract</button>
                </div>
                </div>
            </div>
        </div>
    </div>
</body>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .bodBack{
    background-color: #040B13;
    height: 100vh;
   width: auto;
   color: white;
}
.card{
    max-width: 500px;
}

.buy{
    padding: 10px;
    border: 2px solid rgb(255, 255, 255);
    color: rgb(255, 255, 255);
    background-color: rgb(16, 114, 16);
}

.title{
    font-size: 55px;
   font-weight: 800;
}

.price{
    font-size: 26px;
    background: transparent;
    border: 0px;
    color: rgb(16, 114, 16);
    cursor: default !important;
}



</style>