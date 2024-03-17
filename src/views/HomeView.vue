<template lang="">
    <body class="bodBack">
        <section class="carNexa">
     <h1 class="headNexa">DRIVE NEXA</h1>  
     <h3 class="headNexaa">IGNITE YOUR DRIVE</h3>
    </section>
    <section class="secNexa">
        <h1 class="prod">PRODUCTS</h1>
        
        <div class="container cardsb">
          <CardView/>
           
            </div>
            <button class="viewM"><router-link to="/products" class="nav-link">VIEW MORE>>></router-link></button>
            </section>
    </body>
</template>
<script>
import CardView from '@/components/CardView.vue';
export default {
  data() {
    return {
      prodName:null,
      prodDes:null,
      prodUrl:null,
      price:null,
      category:null
    }
  },
    components:{
      CardView
    }
}
</script>
<style scoped>
.bodBack{
    background-color: #040B13;
    height: 100%;
   width: auto;
   color: #D9D9D9;
}
.headNexa{
  font-family: "Racing Sans One", sans-serif;
  font-weight: 400;
  font-style: normal;
    font-size: 70px;
    text-shadow: 0px 0px 5px #9dacb9;
    color: #040b1316;
    margin-bottom: -150px;
}
.headNexaa{
  font-family: "Racing Sans One", sans-serif;
  font-weight: 400;
  font-style: normal;
  text-shadow: 0px 0px 5px #040B13;
  color:#223b50c7;
  font-size: 50px;
  margin-top:-100px;
}
.carNexa{
   min-height: 93vh;
   display: grid;
   place-items: center;
   padding: 2rem;
   
   background-image: url(https://i.postimg.cc/L6jjvP5z/1400128763.jpg);
   background-size: cover;
   background-position: center;

   background-attachment: fixed;
   text-align: center;
   border-image: fill 1 linear-gradient(#040B13, rgba(0, 0, 0, 0.067));
   
}

.secNexa{
    padding-top: 3rem;
    text-align: center;
}
.prod{
  font-style: OUTFIT;
  font-size: 60px;
  font-weight:bold;
  color: #D9D9D9;
}
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
    color: #D9D9D9;
    font-size: 1.125rem;
    line-height: 1.75rem;
    font-weight: 600;
  
  }
  
  .desc {
    margin-top: 0.5rem;
    color: #D9D9D9;
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
    gap: 37px;
    margin-top: 6%;
  }
  .viewM{
    margin:6% ;
    height: 60px;
    width: 200px;
    background-color: transparent;
    border: 3px solid #5889B0;
    border-radius: 10px;
    color: #D9D9D9;
    font-size: 20px;
    
  }
  .viewM:hover{
    margin:5.65%;
    height:65px;
    width:230px;
    background-color: #5889B0;
    border: 3px solid #1D2024;
    border-radius: 15px;
    color: black;
    font-size: 25px;
    transition: 0.95s;
  }
  @media screen and (max-width: 480px) and (min-width: 400px) {
    .headNexa{
      font-size: 55px;}
      .headNexaa{
  font-size: 30px;
}
      .footNexa{
        gap: 40px;
      }

  }
  @media (max-width:400px) {
    .headNexa{
    font-size: 40px;
  margin-bottom: -60px;
  }
    .headNexaa{
  font-size: 20px;
}
.prod{
  font-size: 25px;
}
    .carNexa{
      min-height: 40vh;
      display: grid;
   place-items: center;
   background-size: cover;
   background-position: center;
   background-attachment: inherit;
   background-repeat: no-repeat;
    }
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
    color: #D9D9D9;
    font-size: 1.125rem;
    line-height: 1.75rem;
    font-weight: 600;
  
  }
  
  .desc {
    margin-top: 0.5rem;
    color: #D9D9D9;
    font-size: 0.875rem;
    line-height: 1.25rem;
  }
  
  .action {
    display: flex;
    color:#5889B0 ;
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
    gap: 37px;
    margin-top: 6%;
  }
  }
</style>