<template lang="">
  <div class="searchsort">
  <div class="search">
    <div class="search-box">
      <div class="search-field">
        <input placeholder="Search..." class="input" type="text" v-model="search" @input="searchFun()">
        
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
  <button @click="sortBtn()" class="button" type="button">Paste  ▼</button>
  <!-- <div class="dropdown-content">
    <button @click="sortBtn()" id="top" >High to Low</button>
    <button @click="sortBtn()" id="middle" >Low to High</button>
  </div> -->
  </div>
</div>
        <div class="container-fluid cardsb">
          
          <div class="card1" v-for="product in searchFun() || sortBtn()" :key="product.prodID">
             <div class="image"><img :src=product.prodUrl alt="" id="img"></div>
              <div class="content">
                  <span class="title">
                    {{product.prodName}}
                  </span>    
                  <p class="category">
                    Category: {{product.category}}   
                  </p>
                <p class="desc">
                {{product.prodDes}}
                </p>     
   
            <p class="action">
              <router-link class="viewM" to="">View More</router-link>
            R{{product.price}}
            </p>
            
              </div>
            </div>
            </div>
              
</template>
<script>

export default {
  data() {
    return {
      search:''
    }
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
    sortBtn(){
      let product = this.$store.state.Products
      if(product){
        product.sort((a, b) => a.price < b.price || b.price < a.price)
      }
      return product.push()
    }

  },
computed:{
  Products(){
        return this.$store.state.Products
      },

},
      mounted() {
      this.$store.dispatch('getProducts')
    }
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
  min-width:  100px;
  height: 35px;
  border: 2px solid #5889B0;
  border-radius: 0px;
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
  left: -10px;
  border: 0;
}

.input {
  width: calc(100% - 29px);
  height: 100%;
  border: 0;
  border-color: #5889B0;
  font-size: 1rem;
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
  right: -px;
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
  width: 21px;
  height: 21px;
  position: absolute;
  top: 6px;
  right: 19px;
  color:black;
}
    .card1 {
    width: 300px;
    height: 380px;
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
    margin-top:10px ;
  }
  .category{
    margin: 0;
    font-style: italic;
  }
  
  .image {
    object-fit: cover;
    width: 100%;
    height: 150px;
    background-color: #D9D9D9;

  }
  #img{
width: 100%;
max-height: 160px;
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
    min-height: 105px;
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

   
  }
  .viewM{
    color: rgb(212, 23, 23);
    text-decoration: none;
    cursor: pointer;
    font-size: 0.880rem;
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
  border-radius: 15px;
  cursor: pointer;
}

.dropdown-content {
  display: none;
  font-size: 13px;
  position: absolute;
  z-index: 1;
  min-width: 200px;
  background-color: transparent;
  border: 2px solid #5889B0;
  border-radius: 0px 15px 15px 15px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
}

.dropdown-content a {
  color: #D9D9D9;
  padding: 8px 10px;
  text-decoration: none;
  display: block;
  transition: 0.1s;
}

.dropdown-content a:hover {
  background-color: #5889B0;
  color: #D9D9D9;
}

.dropdown-content a:focus {
  background-color: #1D2024;
  color: #D9D9D9;
}

.dropdown-content #top:hover {
  border-radius: 0px 13px 0px 0px;
}

.dropdown-content #bottom:hover {
  border-radius: 0px 0px 13px 13px;
}

.paste-button:hover button {
  border-radius: 15px 15px 0px 0px;
}

.paste-button:hover .dropdown-content {
  display: block;
}
.searchsort{
  padding: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}
@media (min-width:300px) and (max-width:430px) {
  .paste-button {
  display: inline-block;
}

.button {
  background-color: transparent;
  color: #D9D9D9;
  padding: 5px 15px;
  font-size: 10px;
  font-weight: bold;
  border: 2px solid #5889B0;
  border-radius: 15px;
  cursor: pointer;
}

.dropdown-content {
  display: none;
  font-size: 13px;
  position: absolute;
  z-index: 1;
  min-width: 100px;
  background-color: transparent;
  border: 2px solid #5889B0;
  border-radius: 0px 15px 15px 15px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
}

.dropdown-content a {
  color: #D9D9D9;
  padding: 8px 10px;
  width:20px;
  text-decoration: none;
  display: block;
  transition: 0.1s;
}

.dropdown-content a:hover {
  background-color: #5889B0;
  color: #D9D9D9;
}

.dropdown-content a:focus {
  background-color: #1D2024;
  color: #D9D9D9;
}

.dropdown-content #top:hover {
  border-radius: 0px 13px 0px 0px;
}

.dropdown-content #bottom:hover {
  border-radius: 0px 0px 13px 13px;
}

.paste-button:hover button {
  border-radius: 15px 15px 0px 0px;
}

.paste-button:hover .dropdown-content {
  display: block;
}
}

</style>