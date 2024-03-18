<template lang="">
   <body class="bodBack">
       <div v-if="product" class="single" >
        <div class="container">
            <div class="row">
                <div class="col-lg-6 my-2">
                <div class="card">
                <img :src="product.prodUrl" alt="" class="card-img-top" style="max-height: 300px;">
              </div>
                </div>
                <div class="col-lg-6 my-2">
                   <h2 class="title">{{product.prodName}}</h2>
                <p>{{product.prodDes}}</p> 
                <div class="row mx-6">
                    <button class="col-6 price">R{{product.price}}</button>
                    <button class="btn btn-success my-5 buy col-4">addToCart</button>
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
    }
}
</script>
<style scoped>
.bodBack{
    background-color: #040B13;
    height: 110vh;
    width: auto;
    color: #d9d9d9;
}

.col-lg
.single{
    padding-top: 80px;
    margin-bottom: 50px;

}
.card{
    max-width: 300px;
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
}

</style>