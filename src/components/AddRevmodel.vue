<template lang="">
      <button type="button" class="btn btn-secondary my-2" data-bs-toggle="modal" data-bs-target="#exampleModalRev">Add Review</button>
           <div class="modal fade" id="exampleModalRev" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">Add Review</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" ></button>
                </div>
                <div class="modal-body">
                  <form @submit.prevent="addRev" method="POST" class="mx-4 my-5"> 
                        <div class="row">
                <div class="col">
                    <p>Title</p>
                  <input type="text" class="form-control" v-model="revHead" name="title"  aria-label="title" required="">
                </div>
              </div>
                <div class="row">
                  <div class="col">
                      <p>Description</p>
                    <input type="text" class="form-control" v-model="revDes" name="des" aria-label="desc" required="">
                  </div>
                </div>
              <div class="modal-footer">
              <button @click="addRev" class="btn btn-dark"><span id="logs">Create Review</span></button>
            </div>
        
        </form>
                </div> 
            </div>
            </div>
            </div>
</template>
<script>
export default {
    data() {
        return {
            revHead:null,
            revDes:null
        }
    },
    computed:{
        addRev(){
            this.$store.dispatch('addRev',this.$data)
        }
    }
}
</script>
<style scoped>
      .modal-content{
    background: #D9D9D9;
  }
  .modal-body p{
    margin: 0;
    padding: 0;
    font-size: 20px;
    color: black;
  }
  
  .modal-body input{
      width: 100%;
      margin-bottom: 20px;
      background-color: transparent;
      border: none;
      border-bottom: 1px solid black;
      outline: none;
      height: 40px;
      color: black;
  
  }
  .modal-body textarea{
    justify-content: end;
    width: 100%;
      margin-bottom: 20px;
      background-color: transparent;
      border: none;
      border-bottom: 1px solid #D9D9D9;
      outline: none;
      height: 40px;
      color: black;
    height: 150px;
  }

  .modal-body form input{
    border-radius: 0px;
  }
  
  .modal-header{
    color: black;
    border-bottom: 0px;
  }
  
  .modal-footer{
    border-top: 0px;
  }
  
  .btn-close{
    background-color: black;
  }
</style>