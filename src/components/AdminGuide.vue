<template lang="">
    <button type="button" class="btn btn-secondary my-2" data-bs-toggle="modal" data-bs-target="#exampleModalGuide"><i class="fa fa-question"></i></button>
         <div class="modal fade" id="exampleModalGuide" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Welcome Admin</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" ></button>
              </div>
              <div class="modal-body">
                  <!-- @submit.prevent="addUser" -->
                <form  method="POST" class="mx-4 my-5" style="text-align:left;"> 
                <h4 style="font-style:bold;">Users Functions:</h4>
                <br>
                <p>Add: Make sure all fields are filled (make sure to keep user roles lowercase)</p>
                <p>Edit: Scroll to specific user and use their button to update</p>
                <p>Delete: Tap twice</p>
                <br >
                <h4 style="font-style:bold;">Products Functions:</h4>
                <br>
                <p>Add: Make sure all fields are filled</p>
                <p>Edit: Scroll to specific product and use its specific button to update</p>
                <p>Delete: Tap twice</p>
                <p>Thank You for being an Admin :)</p>
                </form>
              </div> 
          </div>
          </div>
          </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
        .modal-content{
    background: #D9D9D9;
  }
  .modal-body {
    color: black;
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