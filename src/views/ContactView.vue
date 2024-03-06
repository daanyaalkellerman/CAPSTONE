<template lang="">
<body class="bodBack">
    <section class="contactNexa">
        
        <div class="contact">
        <div class="info">
            <h3>CONTACT US</h3>
        </div>
        <form class="form">
                
        </form>
        </div>
    </section>
</body>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.contact{
    display: flex;
    justify-content: center;
    width:900px;
    height:60vh;
}
.info{
    width:40%;
    text-align:center;
    background-color:#040B13
}
.form{
    width:60%;
}
.contactNexa{
    min-height: 100vh;
    display: grid;
    place-items: center; 
    padding: 0;

    background-image: url(https://i.postimg.cc/vBsW0q9g/Upscales-ai-1709458709523.webp);
    background-size: cover;
    background-position: center;
 
  
    text-align: center;
    border-image: fill 1 linear-gradient(#040B13, rgba(0, 0, 0, 0.067));
    
}
.bodBack{
    background-color: #040B13;
    width: auto;
    color: white;
}
</style>