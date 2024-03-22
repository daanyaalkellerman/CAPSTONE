<template lang="">
  <body class="bodBack">
      <section class="carNexa">
        <video autoplay loop muted playsinline class="video" >
          <source class="vid" src="../assets/y2mate.com - Midnight Run R34 GTR FD RX7 Evo and more  Zhiyun Crane 3 Lab  4K_1080p.mp4">
        </video>
      </section>
  <section class="secNexa">
      <h1 class="prod animate__animated animate__zoomInDown animate__slow">PRODUCTS</h1>
<div class="container cardsb" data-aos="fade-down" data-aos-duration=2000>
<div class="searchsort">
<div class="search">
  <div class="search-box">
    <div class="search-field">
      <input placeholder="Enter name or category" class="input" type="text" v-model="search" @input="searchFun()">
      <div class="search-box-icon">
        <button class="btn-icon-content">
          <i class="search-icon">
            <svg xmlns="://www.w3.org/2000/svg" version="1.1" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" fill="#D9D9D9"></path></svg>
          </i>
        </button>
      </div>
    </div>
  </div> 
</div>
<div class="paste-button">
<button @click="sortPrice" class="button" type="button">Sort by price</button>
</div>
</div>
      <div class="container-fluid cardsb mt-4" >
        
        <div class="card1" v-for="product in searchFun()" :key="product.prodID" data-aos="fade-up" data-aos-duration=1000>
         <router-link :to="{ name: 'single', params:{id:product.prodID}}" ><div class="image"><img :src="product.prodUrl" :alt="product.prodName" id="img" ></div></router-link>
            <div class="content">
                <span class="title">
                  {{product.prodName}}
                </span>    
                <p class="category">
                  Category: {{product.category}}   
                </p>
          <p class="action">
          R{{product.price}}
          </p>
          
            </div>
          </div>
          </div>

          </div>
          
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
    prodID:null,
    price:null,
    category:null,
    userID:null,
    search:''
  }
},
computed:{
  Products(){
    return this.$state.store.Products
  }
},
  components:{
    CardView
  },
  
  mounted(){
    this.$store.dispatch('getProducts')
    this.$store.commit("setProduct", null);
  },
  methods: {
  searchFun(){
    let Products = this.$store.state.Products
    let find = this.search
    let found = Products.filter(product => {
      return product.prodName.toLowerCase().includes(find.toLowerCase()) || product.category.toLowerCase().includes(find.toLowerCase())
    });
    return found
  },
      sortPrice() {
          this.$store.commit("sortPrice")
      }
},
}
</script>
<style scoped>
.search {
color: #D9D9D9;
display:grid;
place-items:center;
}

.search-box {
max-width: 400px;
min-width:  250px;
height: 35px;
border: 2px solid #5889B0;
border-radius: 5px;
padding: 5px 10px ;
background: transparent;
box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
}

.search-box:hover {
border-color: #5889B0;
}

/*Section input*/
.search-field {
position: relative;
width: 100%;
height: 100%;
top: -1px;
left: -8px;
border: 0;
}

.input {
width: calc(100% - 29px);
height: 100%;
border: 0;
border-color: #5889B0;
font-size: 0.9rem;
padding-right: 0px;
color: #D9D9D9;
background: transparent;
border-right: 2px solid none;
outline: none;
}

.input::-webkit-input-placeholder {
color: #D9D9D9;
}
/*Search button*/
.search-box-icon {
width: 60px;
height: 35px;
position: absolute;
top: -6px;
right: -35px;
background: transparent;
color:#D9D9D9;
}

.btn-icon-content {
top: -6px;
background: black;
border: none;
cursor: pointer;
opacity: 1;
color:black;
}

.btn-icon-content:hover {
opacity: 1;
}

.search-icon {
width:19px;
height: 25px;
position: absolute;
top: 3.5px;
right: 23px;
color:black;
}
  .card1 {
  width: 250px;
  height:250px;
  border-radius: 8px;
  background-color: #1D2024;
  box-shadow: 0px 3px 3px 1px  rgba(255 , 255 , 255,0.35);
  border: 1px solid transparent;
}

.card a {
  text-decoration: none
}

.content {
  padding: 0.5rem;
}
.category{
  margin: 0;
  font-style: italic;
  font-size: 14px;
  color: #D9D9D9;
}

.image {
  object-fit: cover;
  width: 100%;
  height: 167px;
  background-color: #D9D9D9;

}
#img{
width: 100%;
max-height: 167px;
}
.title {
  color: #D9D9D9;
  font-size: 1.425rem;
  line-height: 1.75rem;
  font-weight: 600;
}

.desc {
  margin-top: 0.5rem;
  color: #D9D9D9;
  font-size: 0.835rem;
  text-align: left;
  height: 110px;
}

.action {
  display: flex;
  gap: 100px;
  color: #5889B0;
  font-size: 0.875rem;
  height: 0.88rem;
  font-weight: 500;
  align-items: end;
  justify-content: end;
  padding:1px 8px;
  border-radius: 4px;
  line-height: 1.75rem;
}


.cardsb{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  text-align: left;
  gap: 30px;
  padding: 0.1rem;
 padding-bottom:20px
}
.paste-button {
position: relative;
display: inline-block;

}

.button {
background-color: transparent;
color: #D9D9D9;
padding: 10px 15px;
font-size: 15px;
font-weight: bold;
border: 2px solid #5889B0;
border-radius: 5px;
cursor: pointer;
}

.paste-button:hover .dropdown-content {
display: block;
}
.searchsort{
display: flex;
justify-content: center;
align-items: center;
}
@media (min-width:1024px) {
.card1{
  width: 300px;
  height: 300px;
}
.image{
  width: 100%;

}
img{
  width: 100%;
  
}
}
@media (min-width:300px) and (max-width:430px) {
.paste-button {
display: inline-block;
}

.button {
background-color: transparent;
color: #D9D9D9;
padding: 9px 15px;
font-size: 8px;
font-weight: bold;
border: 2px solid #5889B0;
border-radius: 5px;
cursor: pointer;
}


}

.bodBack{
  background-color: #040B13;
  height: 100%;
 width: auto;
 color: #D9D9D9;
}
.carNexa{
 max-height: 100vh;
width:100%;
 display: grid;
 place-items:center;
 
 /* background-image: url(https://i.postimg.cc/L6jjvP5z/1400128763.jpg); */
 text-align: center;
 border-image: fill 1 linear-gradient(#040B13, rgba(0, 0, 0, 0.067));
 
}

.video{
position:relative;
width:100%;
height:100%;
border-bottom:1px solid #D9D9D9
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
  padding: 0.5rem;
  margin-top:1px ;
}

.image {
  object-fit: cover;
  width: 100%;
  height: auto;
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
  margin-top: 22px;

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

@media screen and (max-width: 480px) and (min-width: 400px) {
    .category{
      font-size: 10px;
    }
    .title{
      font-size: 13px;
    }

    .footNexa{
      gap: 40px;
    }
    .action{
      margin-top: 10px;
      margin-bottom: 0px;
      font-size: 11px;
    }
}
@media (max-width:400px) {
  .category{
      font-size: 10px;
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

/* .content {
  padding: 0.5rem;
  margin-top:20px ;
} */

.image {
  object-fit: cover;
  width: 100%;
  height: 160px;
  background-color: #Ddd;

}
#img{
width: 100%;
height: 160px;
}
.title {
  color: #D9D9D9;
  font-size: 13px;
  line-height: 1.75rem;
  font-weight: 600;

}

.action {
  display: flex;
  color:#5889B0 ;
  font-size: 11px;
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
@media (width:768px) {
  .card1 {
  max-width: 300px;
  height: 250px;
  border-radius: 8px;
  background-color: #1D2024;
  box-shadow: 0px 3px 3px 1px  rgba(255 , 255 , 255,0.35);
  border: 1px solid transparent;
}

.card a {
  text-decoration: none
}

.content {
  padding: 0.5rem;
  margin-top:1px ;
}

.image {
  object-fit: cover;
  width: 100%;
  height: 150px;
  background-color: #Ddd;

}
#img{
width: 100%;
height: 150px;
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
  margin-top: 22px;

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