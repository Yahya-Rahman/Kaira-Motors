<script setup>
import Header from './Header.vue';

</script>

<template>
    <Header />
    
    <section class="body">
        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-12 col-md-12 col-lg-12">
        <div class="logo-img">
            <img src="/images/kiara-motor/logo.jpg" alt="logo-image" class="img-fluid">
        </div>

        <div class="input-box ">
            <div class="input-group mt-5 mb-3">
              <span class="input-group-text" id="basic-addon1"><i class="fa-solid fa-user" style="color: #c2c2c2;"></i></span>
              <input type="text" class="form-control py-2 text-center" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
        </div>

            <div class="input-group mb-4">
              <span class="input-group-text" id="basic-addon1"><i class="fa-solid fa-lock" style="color: #c2c2c2;"></i></span>
              <input type="password" class="form-control py-2 text-center" placeholder="Password" aria-label="Username">
    </div>
    </div>

    <div class="btn-1 text-center">
            <button class="btn" type="button">Login</button>
    </div>

        </div>
        </div>
        </div>
    </section>
</template>

<style scoped>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    scroll-behavior: smooth;
}
.body{
    height: 100vh;
    background-color: black;
    color: white;
    padding-top: 120px;
}

img{
    width: 15%;

}
.logo-img{
     text-align: center;
    margin: auto
}
.input-group{
    margin: auto;
    width: 22%;
    
}

input{
    background-color: #21292C;
    color: white!important;
    border: solid 1px  rgb(134, 132, 132);
}
.input-group-text{
    background-color: #374549;
    border: solid 1px  rgb(134, 133, 133);
}
button{
    width: 22%;
    margin: auto;
    background-color: white;
    font-weight: bold;
}
.form-control:focus {
 background-color: #21292C;  /* keep black on focus */
  color: #fff !important;             /* keep text white */
  border-color: #666;                 /* subtle border on focus */
  box-shadow: none;                   /* remove blue glow */
}
.form-control::placeholder{
     color: #bbb;   /* softer white (you can change to #fff for pure white) */
  opacity: 1;    /* ensure it’s visible */
}


                /*=====Hover Effect====*/


button:hover{
    background-color: #b31129;
}
input:hover{
    border: solid 1px #b31129;
}
.input-group-text:hover{
    border: solid 1px #b31129;
}



                /*=====TABLET-SCREEN====*/


@media only screen and (min-width: 568px) and (max-width: 992px){
    .body{
        padding-top: 220px;
    }
    img{
        width: 25%;
        margin-bottom: 20px;
    }
    .input-group{
        width: 40%;
        
    }
    button{
        width: 40%;
        margin-top: 15px;
        
    }
}


                /*=====MOBILE-SCREEN====*/



@media only screen and (min-width: 200px) and (max-width: 567px){
    .body{
        padding-top: 180px;
    }
    img{
        width: 50%;
        margin-bottom: 20px;
    }
    .input-group{
        width: 80%;
        
    }
    button{
        width: 80%;
        margin-top: 15px;
        
    }
}


</style>


       