<template lang="">
  <footer >
    <div class="footNexa">

        <div>
            <img class="driveLogo"  src="https://i.postimg.cc/RZbKphVJ/Screenshot-2024-03-05-142157.png" alt="">
        </div>
        <div>
            <h3 class="footH">Links</h3>
            <router-link v-if="$cookies.get('jwt')" to="/home" class="nav-link">Home</router-link>
            <router-link to="/about" class="nav-link">About</router-link>
            <router-link to="/contact" class="nav-link">Contact</router-link>
           <br><br>
        </div>
        <div>
            <h3 class="footH">Follow Us</h3>
            <ul class="nav" id="icons">
              <li class="ms-3">
                  <a class="icon"href="https://instagram.com/daanyaalkellerman/" target="_blank"><i class="fa fa-instagram"></i></a>
                </li>
                <li class="ms-3">
                  <a class="icon" href="https://github.com/daanyaalkellerman" target="_blank"><i class="fa fa-github"></i></a>
                </li>
                <li class="ms-3">
                  <a class="icon"  href="https://youtube.com/@daanyaalkellerman" target="_blank"><i class="fa fa-youtube-play"></i></a>
                </li>
            </ul>
            <br><br>
        </div>
    </div>
<p class="copyNexa">Drive Nexa&copy{{currYear}}</p>
</footer>
</template>
<script>
export default {
    data(){
      return{
        currYear: new Date().getFullYear()
      }
    }
}
</script>
<style scoped>
.driveLogo{
    width: 120px;
}
.fa{
  color:#D9D9D9;
}
    .footNexa{
    color: #D9D9D9;
    border-top: 1px solid #D9D9D9;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 400px;
    padding: 1rem ;
    background-color: #040B13;
    
  }
  .copyNexa{
    color: #D9D9D9;
    text-align: center;
    margin: 0;
    background-color: #040B13;
  }
  @media (max-width:1024px) {
    .footNexa{
      gap:200px;
    }
  }
  @media (min-width:480px) and (max-width:786px){
    .footNexa{
      gap:80px;
    }
  }
  @media (min-width:300px) and (max-width:480px){
    .footNexa{
      gap:40px;
    }
    .footH{
      font-size: 16px
    }
    .nav-link{
      font-size: 13px;
    }
    .fa{
     font-size: 15px;
    }
    .driveLogo{
    width: 90px;
}
  }
</style>