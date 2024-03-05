<template>
<NavBar/>
<body class="bodBack">
  
</body>
<router-view/>
<FooterView/>
</template>
<script>
   import NavBar from './components/NavBar.vue'
   import FooterView from './components/FooterView.vue'
export default {
    components:{NavBar,FooterView}
  }

</script>

<style>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.bodBack{
  background-color: #040B13
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}


</style>
