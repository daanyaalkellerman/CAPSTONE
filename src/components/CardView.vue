<template lang="">
     <div class="card1" v-for="product in $store.state.Products" :key="product.prodID">
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
<style scoped>
    .card1 {
    max-width: 300px;
    border-radius: 8px;
    background-color: #1D2024;
    box-shadow: 0px 3px 3px 1px  rgba(255 , 255 , 255,0.35);
    border: 1px solid transparent;
  }
  
  .card a {
    text-decoration: none
  }
  
  .content {
    padding: 1.1rem;
    margin-top:20px ;
  }
  
  .image {
    object-fit: cover;
    width: 100%;
    height: 150px;
    background-color: #Ddd;

  }
  #img{
width: 100%;
height: auto;
  }
  .title {
    color: #fff;
    font-size: 1.125rem;
    line-height: 1.75rem;
    font-weight: 600;
  
  }
  
  .desc {
    margin-top: 0.5rem;
    color: #fff;
    font-size: 0.875rem;
    line-height: 1.25rem;
  }
  
  .action {
    display: flex;

    color: #5889B0;
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: 500;
    align-items: end;
    justify-content: end;
    padding: 4px 8px;
    border-radius: 4px;

  }
  
  .action span {
    transition: .3s ease;
  }
  
  .action:hover span {
    transform: translateX(4px);
  }
  
  .cardsb{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 30px;
    padding: 2rem;
   
  }
</style>