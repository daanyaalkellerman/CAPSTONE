<template lang="">
     <div class="card1" v-for="product in $store.state.products" :key="products.prodID">
                <div class="image"><img :src=product.prodUrl alt="" id="img"></div>
                 <div class="content">
                     <span class="title">
                       {{product.prodName}}
                     </span>    
                   <p class="desc">
                   {{product.prodDes}}
                   </p>     
               <p class="action">
               {{product.price}}
               </p>
                 </div>
               </div>
</template>
<script>
export default {
    
}
</script>
<style lang="">
    
</style>