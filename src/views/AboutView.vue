<template lang="">
<body class="bodBack">
    <section class="aboutNexa">
        <h1 class="aboutHe animate__animated animate__lightSpeedInRight animate__slow" >ABOUT US</h1>
    <p class="aboutWords animate__animated animate__slideInUp">
     Welcome to Drive Nexa, where we have redefined the car-buying experience to make quality, reliable vehicles more affordable for everyone. We prioritize offering a diverse range of car models that combine reliability and performance without breaking the bank. Our commitment to transparency means you can explore detailed information about each model, from specifications to maintenance history, empowering you to make informed decisions. With a focus on customer satisfaction, we've streamlined the purchasing process, ensuring a hassle-free experience. Whether you're a first-time buyer or looking to upgrade, our affordable options cater to various budgets, allowing you to drive away in a dependable vehicle that meets your needs. Experience the future of car buying, where affordability meets reliability, only at Drive Nexa.
    </p>    
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
   width: auto;
   color: white;
}
.aboutHe{
    font-style: OUTFIT;
  font-size: 60px;
  font-weight:bold;
  color: #D9D9D9;
  margin-bottom: -100px;
}
.aboutWords{
    font-size: 20px;
}
    .aboutNexa{

    min-height: 93vh;
    display: grid;
    place-items: center;
    padding: 2rem;
    
    background-image: url(https://i.postimg.cc/66gMXvhq/tablet-2560x1700.jpg);
    background-size: cover;
    background-position: center;
 
  
    text-align: center;
    border-image: fill 1 linear-gradient(#040B13, rgba(0, 0, 0, 0.699));
    
}
@media (max-width:380px){
    .aboutWords{
        font-size:10px;
    }
    .aboutH{
  font-size: 40px;
}
    
}
@media (min-width:420px) and (max-width:786px){
    .aboutWords{
        font-size: 13px;
    }
}
@media (min-width:800px) and (max-width:1030px){
    .aboutWords{
        font-size: 15px;
    }
}
</style>