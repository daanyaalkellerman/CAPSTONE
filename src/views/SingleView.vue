<template lang="">
   <body class="bodBack">
       <div v-if="product" class="single" >
        <div class="container">
            <div class="row">
                <div class="col-lg-6 my-2">
                <div class="card animate__animated animate__lightSpeedInLeft">
                <img :src="product.prodUrl" alt="" class="card-img-top " style="max-height: 300px;">
              </div>
                </div>
                <div class="col-lg-6 my-2">
                   <h2 class="title animate__animated animate__zoomInDown">{{product.prodName}}</h2>
                <p class="animate__animated animate__zoomInUp animate__slow">{{product.prodDes}}</p> 
                <div class="row mx-6">
                    <button class="col-6 price animate__animated animate__tada animate__slow">R{{product.price}}</button>
                    <button @click="addCart(product)" class="btn btn-success my-5 buy col-4 animate__animated animate__pulse">addToCart</button>
                </div>
                </div>
            </div>
        </div>
    </div>
</body>
</template>
<script>
export default {
    props:['id'],
    computed:{
        product(){
            return this.$store.state.Product
        }
    },
    created(){
        this.$store.dispatch('getProduct', this.$route.params);
    },
    methods: {
      addCart(product)  {
        this.$store.dispatch('addCart', product)
      }
    },
}
</script>
<style scoped>
.bodBack{
    background-color: #040B13;
    min-height: 100vh;
    width: auto;
    color: #d9d9d9;
}


.single{

    padding-top: 250px;

    /* margin-bottom: 0px; */

}
.card{
    width: 450px;
}

.buy{
    padding: 10px;
    border: 2px solid #d9d9d9;
    color: #d9d9d9;
    background-color: #5889B0;
}

.title{
    font-size: 50px;
   font-weight: 600;
}

.price{
    font-size: 24px;
    background: transparent;
    border: 0px;
    color: #5889B0;
    cursor: default !important;
}

@media (min-width:300px) and (max-width:480px) {
    .title{
    font-size: 30px;
   font-weight: 600;
}
p{
    font-size:14px
}
.single{
    padding-top: 60px;
    width:auto;
}
.price{
    font-size:14px
}

.buy{
    padding: 5px;
    border: 1px solid #d9d9d9;
    color: #d9d9d9;
    background-color: #5889B0;
    font-size:14px;
}
.card{
    width: 300px;
}

}
@media (width:768px) {
    .single{
    padding-top: 80px;
    width:auto;
}
.card{
    width: 500px;
}
}
@media (width:1440px){
    .single{
        padding-top: 380px;
    }
}

</style>