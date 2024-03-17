<template lang="">
   <body class="bodBack">
    <div class="single">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 my-4">
                <div class="card">
                <img src="https://iili.io/JW1yDog.jpg" alt="" class="card-img-top w-100" style="max-height: 320px;">
              </div>
                </div>
                <div class="col-lg-6 my-4">
                   <h2 class="title">prodname</h2>
                <p>description</p> 
                <div class="row mx-4">
                    <button class="col-6 price">price</button>
                    <button class="btn btn-success my-5 buy col-6" >addToCart</button>
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
.single{
    padding-top: 80px;
    margin-bottom: 50px;
}
    .bodBack{
    background-color: #040B13;
    height: 85vh;
   width: auto;
   color: #d9d9d9;
}
.card{
    max-width: 500px;
}

.buy{
    padding: 10px;
    border: 2px solid #d9d9d9;
    color: #d9d9d9;
    background-color: #5889B0;
}

.title{
    font-size: 55px;
   font-weight: 800;
}

.price{
    font-size: 26px;
    background: transparent;
    border: 0px;
    color: #5889B0;
    cursor: default !important;
}

@media (min-width:300px) and (max-width:430px) {
    .title{
    font-size: 50px;
   font-weight: 600;
}
.single{
    padding-top: 60px;
   
}

}

</style>