<template lang="">
    <body class="bodBack">
        <section class="carNexa">
     <h1 class="headNexa">DRIVE NEXA<br>IGNITE YOUR <br>DRIVE</h1>  
    </section>
    <section class="secNexa">
        <h1>FEATURED PRODUCTS</h1>
        <div class="container cardsb">
            <div class="card1">
                <div class="image"><img src="https://i.postimg.cc/L6jjvP5z/1400128763.jpg" alt="" id="img"></div>
                 <div class="content">
                     <span class="title">
                       Car this
                     </span>    
                   <p class="desc">
                     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
                     dolores, possimus pariatur animi temporibus nesciunt praesentium 
                   </p>
               <p class="action">
                R159 999
               </p>
                 </div>
               </div>
               <div class="card1">
                <div class="image"><img src="https://i.postimg.cc/L6jjvP5z/1400128763.jpg" alt="" id="img"></div>
                 <div class="content">
                     <span class="title">
                       Car this
                     </span>    
                   <p class="desc">
                     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
                     dolores, possimus pariatur animi temporibus nesciunt praesentium 
                   </p>
               <p class="action">
                R159 999
               </p>
                 </div>
               </div>
               <div class="card1">
                <div class="image"><img src="https://i.postimg.cc/L6jjvP5z/1400128763.jpg" alt="" id="img"></div>
                 <div class="content">
                     <span class="title">
                       Car this
                     </span>    
                   <p class="desc">
                     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
                     dolores, possimus pariatur animi temporibus nesciunt praesentium 
                   </p>
               <p class="action">
                R159 999
               </p>
                 </div>
               </div>
            </div>
            <button class="viewM">VIEW MORE>>></button>
            </section>
    </body>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.bodBack{
    background-color: #040B13;
    height: 100%;
   width: auto;
   color: white;
}
.headNexa{
    font-size: 70px;
    text-shadow: 4px 5px 3px #1D2024;
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
    gap: 37px;
    margin-top: 6%;
  }
  .viewM{
    margin:6% ;
    height: 80px;
    width: 200px;
    background-color: transparent;
    border: 3px solid #5889B0;
    border-radius: 20px;
    color: white;
    font-size: 20px;
  }
  .viewM:hover{
    margin:5.65%;
    height:90px;
    width:250px;
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
      .footNexa{
        gap: 40px;
      }

  }
  @media (max-width:400px) {
    .headNexa{
    font-size: 30px;}
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