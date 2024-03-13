<template lang="">
 <body class="bodBack">
    <section class="productNexa">
       

</section>
    <section>
      <h1 class="productH">PRODUCTS</h1>

<CardView/>
    </section>
</body>
</template>
<script>
import CardView from '../components/CardView.vue';
export default {
  data() {
    return {
      search:''
    }
  },
  mounted() {
    this.$store.dispatch('getProducts')
  },
  components:{
    CardView
  },
  methods: {
    searchFun(){
      let Products = this.$store.state.Products
      let find = this.search
      let found = Products.filter(product => {
        return product.prodName.toLowerCase().includes(find.toLowerCase()) || product.category.toLowerCase().includes(find.toLowerCase())
      });
      return found
    }

  },

    
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
    gap: 30px;
    padding: 2rem;
   
  }

.productH{
    color:white;
    display: flex;
    justify-content: center;
    align-items: center;
}
   .productNexa{

min-height: 93vh;
/* display: grid;
place-items: center; */
padding-top: 5rem;

background-image: url(https://i.postimg.cc/sXdFm9zm/Upscales-ai-1709709872875.webp);
background-size: cover;
background-position: center;


text-align: center;
border-image: fill 1 linear-gradient(#040B13, rgba(0, 0, 0, 0.066));

}
.search {
  margin-top: 30px;
color: black;
display:grid;
place-items:center;
}

.search-box {
  max-width: 400px;
  min-width:  100px;
  height: 35px;
  border: 1px solid lightblue;
  border-radius: 0px;
  padding: 5px 10px ;
  background: #D9D9D9;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
}

.search-box:hover {
  border-color: black;
}

/*Section input*/
.search-field {
  position: relative;
  width: 100%;
  height: 100%;
  left: -10px;
  border: 0;
}

.input {
  width: calc(100% - 29px);
  height: 100%;
  border: 0;
  border-color: transparent;
  font-size: 1rem;
  padding-right: 0px;
  color: black;
  background: #D9D9D9;
  border-right: 2px solid none;
  outline: none;
}

.input::-webkit-input-placeholder {
  color: black;
}
/*Search button*/
.search-box-icon {
  width: 60px;
  height: 35px;
  position: absolute;
  top: -6px;
  right: -35px;
  background: transparent;
  color:black;
}

.btn-icon-content {
  width: 46px;
  height: 35px;
  top: -6px;
  right: -21px;
  background: black;
  border: none;
  cursor: pointer;
  opacity: .4;
  color:black;
}

.btn-icon-content:hover {
  opacity: .8;
}

.search-icon {
  width: 21px;
  height: 21px;
  position: absolute;
  top: 6px;
  right: 19px;
  color:black;
}
@media (max-width:400px) {
    .productH{
    font-size: 30px;}
    .productNexa{
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