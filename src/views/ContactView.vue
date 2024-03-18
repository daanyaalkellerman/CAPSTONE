<template lang="">
<body class="bodBack">
    <section class="contactNexa">
        
        <div class="contact">
        <div class="info">
            <h5 class="infoH">Address:</h5>
            <p class="address">235 Laneden Road, Cape Town. Western Cape 7798</p>
        <br/>
            <h5 class="infoH">Contact Us:</h5>
            <p class="address">021 243 5463</p>
        <br/>
            <h5 class="infoH">Disclaimer:</h5>
            <p class="address">Most cars will be one time payments contact us for more details.</p>
        </div>
        <form class="form">
 <div class="group">
  <input required="" type="text" class="input">
  <span class="highlight"></span>
  <span class="bar"></span>
  <label>FullName</label>
</div>
<div class="group">
  <input required="" type="text" class="input">
  <span class="highlight"></span>
  <span class="bar"></span>
  <label>Email</label>
</div>
<div class="group">
    <p class="text-secondary msg">Leave a Message</p>
  <textarea required type="text" class="inputM" data-label-message>
  </textarea>
</div>
        </form>
        </div>
    </section>
    <div class="container-fluid revs">
<h2 class="heading animate__animated animate__fadeInDownBig text-uppercase fw-semibold">ANONYMOUS REVIEWS:</h2>
<AddRev/>
<div class="cards"  >
    <div class="card overflow-hidden" v-for="rev in $store.state.Reviews" :key="rev.revID">
        <div class="carder"> 
            <h3 class="card-title animate__animated animate__fadeInUpBig animate__slow">{{rev.revHead}}</h3>
            <div class="card-content animate__animated animate__fadeInUpBig ">
                <p>{{rev.revDes}} </p>
            </div>
        </div>
        <button @click="deleteRev(rev.revID)" class="delbtn">Delete</button>
    </div>
</div>
</div>
</body>
</template>
<script>
import AddRev from '../components/AddRevmodel.vue';
export default {
    components:{
        AddRev
    },
    computed: {
        Reviews(){
       return this.$store.state.Reviews
      },  
    },
    methods: {
        deleteRev(revID){
        this.$store.dispatch('deleteRev',revID)
      },
    },
    mounted() {
      this.$store.dispatch('reviews')
    }
}
</script>
<style scoped>

h2 {
    font-size: 24px;
    margin-bottom: 1em;
    color: #d9d9d9;
}
.des{
    padding: 10px;
    color: #d9d9d9;
}

.revs{
    padding: 40px;
    text-align: center;
    border-top: 1px solid #D9D9D9;
}
.delbtn{
    background-color: #5889B0;
   padding: 4px 8px 4px;
   width: 80px;
   height: 30px;
   font-size: 15px;
    color: #D9D9D9;
   border: 1px solid #040B13;
   border-radius: 4px;
}
.cards {
    display: flex;
    text-align: left;
    padding: 20px 0px;
    list-style: none;
    overflow-x: scroll;
    -ms-scroll-snap-type: x mandatory;
    scroll-snap-type: x mandatory;
}
.card {
    display: flex;
    flex-direction: column;
    flex: 0 0 100%;
    padding: 10px;
    color: #040B13;
    background: #D9D9D9;
    border-radius: 4px;
    height: 180px;
    transition: all 0.2s;
    border: none;
}
.card:hover{
    transform: scale(1.0);
    transition: all .4s ease-in-out;
}

.card .card-title {
    font-size: 1.1rem;
    text-transform: uppercase;
}

.card .card-content {
    margin: 10px 0;
    max-width: 90%;
    margin-left: 15px;
    font-size: 12px;
}
.carder{
    height: 100%;
}
img{
    height: 90px;
}

@media (min-width: 500px) {
    .card {
        flex-basis: calc(50% - 10px);
    }

    .card:not(:last-child) {
        margin-right: 20px;
    }
}

@media (min-width: 700px) {
    .card {
        flex-basis: calc(calc(100% / 3) - 20px);
    }

    .card:not(:last-child) {
        margin-right: 30px;
    }
}

@media (min-width: 1100px) {
    .card {
        flex-basis: calc(25% - 30px);
    }

    .card:not(:last-child) {
        margin-right: 40px;
    }
}
.contact{
    display: flex;
    justify-content: center;
    width:700px;
    height:60vh;
}
.address{
    font-size: 13px;
}
.msg{
    text-align: left;
    padding: 5px;
}
.info{
    width:50%;
    text-align:center;
    background-color:#040B13;
    border: 1px solid white;
}
.infoH{
    font-size: 20px;
    padding-top: 10px;
}
.form{
    width:100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 60px;
    background-color: rgba(255, 255, 255,0.86);
    border: 2px solid #040B13;
}
.group {
 position: relative;

}
.inputM{
    font-size: 16px;
 padding: 10px 10px 10px 5px;
 display: block;
 width: 400px;
 height: 130px;
 border: none;
 border-bottom: 1px solid #515151;
 background: transparent;
}

.input {
 font-size: 16px;
 padding: 10px 10px 10px 5px;
 display: block;
 width: 400px;
 border: none;
 border-bottom: 1px solid #515151;
 background: transparent;
}

.input:focus {
 outline: none;
}

label {
 color: #999;
 font-size: 18px;
 font-weight: normal;
 position: absolute;
 pointer-events: none;
 left: 5px;
 top: 10px;
 transition: 0.2s ease all;
 -moz-transition: 0.2s ease all;
 -webkit-transition: 0.2s ease all;
}

.input:focus ~ label, .input:valid ~ label {
 top: -20px;
 font-size: 14px;
 color: #5264AE;
}

.bar {
 position: relative;
 display: block;
 width: 200px;
}

.bar:before, .bar:after {
 content: '';
 height: 2px;
 width: 0;
 bottom: 1px;
 position: absolute;
 background: #5264AE;
 transition: 0.2s ease all;
 -moz-transition: 0.2s ease all;
 -webkit-transition: 0.2s ease all;
}

.bar:before {
 left: 50%;
}

.bar:after {
 right: 50%;
}

.input:focus ~ .bar:before, .input:focus ~ .bar:after {
 width: 50%;
}

.highlight {
 position: absolute;
 height: 60%;
 width: 100px;
 top: 25%;
 left: 0;
 pointer-events: none;
 opacity: 0.5;
}

.input:focus ~ .highlight {
 animation: inputHighlighter 0.3s ease;
}

@keyframes inputHighlighter {
 from {
  background: #5264AE;
 }

 to {
  width: 0;
  background: transparent;
 }
}

.contactNexa{
    min-height: 100vh;
    display: grid;
    place-items: center; 
    padding: 0;

    background-image: url(https://i.postimg.cc/3JgzFSXC/0062963d91d65b0743ea5f1b771d6e68.jpg);
    background-size: cover;
    background-position: center;
 
  
    text-align: center;
    border-image: fill 1 linear-gradient(#040B13, rgba(0, 0, 0, 0.011));
    
}
.bodBack{
    background-color: #040B13;
    width: auto;
    color: white;
}
@media (min-width: 720px) and (max-width:1080px) {
    .address{
        font-size: 10px;
    }
    .contact{
        width:600px;
        height:50%;
    }
    .info{
        width: 50%px;
        padding: 10px;
    }
    .infoH{
        font-size: 17px
    }
    .form{
        gap:40px
    }
    .input {
 font-size: 13px;
 padding: 9px 9px 9px 5px;
 display: block;
 width: 350px;
 border: none;
 border-bottom: 1px solid #515151;
 background: transparent;
}
.inputM{
    height: 80px;
    width:350px
}
}
@media (min-width:600px) and (max-width:720px) {
    
    .contact{
        width:600px;
        height:50%;
    }
    .info{
        width: 50%;
    }
    .form{
        gap:40px
    }
    .input {
 font-size: 13px;
 padding: 9px 9px 9px 5px;
 display: block;
 width: 350px;
 border: none;
 border-bottom: 1px solid #515151;
 background: transparent;
}
.inputM{
    height: 80px;
    width:350px
}
}
@media (min-width:300px) and (max-width:600px) {
    .address{
    font-size: 8px;
}
     .contact{
        width:100%;
        height:40%;
    }
    .info{
        width: 80%;
    }
    .infoH{
        padding: 0;
    }
    .form{
        gap:20px;
        width:80%;
    }
    .input {
 font-size: 13px;
 padding: 9px 9px 9px 5px;
 display: block;
 width: 200px;
 border: none;
 border-bottom: 1px solid #515151;
 background: transparent;
}
.inputM{
    height: 80px;
    width:100%;
}
label {
 color: #999;
 font-size: 10px;
 font-weight: normal;
 position: absolute;
 pointer-events: none;
 left: 5px;
 top: 20px;
 transition: 0.2s ease all;
 -moz-transition: 0.2s ease all;
 -webkit-transition: 0.2s ease all;
}

.input:focus ~ label, .input:valid ~ label {
 top: -1px;
 font-size: 10px;
 color: #5264AE;
}
.msg{
    text-align: left;
    padding: 5px;
    font-size: 10px;
}
.info{
    padding-top: 20px;
    width: 60%;
}
.infoH{

    font-size: 12px;
}
}
</style>