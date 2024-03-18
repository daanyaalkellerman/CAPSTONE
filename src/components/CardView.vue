<template lang="">

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
    margin-top:2px ;
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
    height: 150px;
    background-color: #D9D9D9;

  }
  #img{
width: 100%;
max-height: 160px;
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
    text-align: left;
    gap: 30px;
    padding: 0.1rem;
   
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

.dropdown-content {
  display: none;
  font-size: 13px;
  position: absolute;
  z-index: 1;
  min-width: 200px;
  background-color: transparent;
  border: 2px solid #5889B0;
  border-radius: 5px; 
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
  border-radius: 5px;
}

.dropdown-content #bottom:hover {
  border-radius: 5px;
}

.paste-button:hover button {
  border-radius: 5px;
}

.paste-button:hover .dropdown-content {
  display: block;
}
.searchsort{
  padding: 20px;
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