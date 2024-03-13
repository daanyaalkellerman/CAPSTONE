<template lang="">
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
<div class="container-fluid cardsb">
  
  <div class="card1" v-for="product in searchFun()" :key="product.prodID">
             <div class="image"><img :src=product.prodUrl alt="" id="img"></div>
              <div class="content">
                  <span class="title">
                    {{product.prodName}}
                  </span>    
                <p class="desc">
                {{product.prodDes}}
                </p>     
            <p class="action">
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
    background-color: #D9D9D9;

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
</style>