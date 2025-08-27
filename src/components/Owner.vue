<script setup>


</script>



<template>


       <!-----OWNER-IMAGE------>

<section id="owner">
  <div class="container-fluid bg-black  mt-5 pb-5">
    <div class="row ">   
      <div class="col-sm-12 col-md-12 col-lg-5 col-xl-5 ">
        <div class="float-end me-5 ceo" style="margin-top: 250px;  ">
        <img src="/images/kiara-motor/owner.jpg" class="img-fluid " style="width: 250px; border-radius: 50%; border: solid 8px #373737;" alt="Owner-image">
      <div class="mt-4 ceo-name text-white ">
         <h2>Mr. Ghilman Kaira</h2>
          <p class="ms-3">CEO, GWM Kaira Motors Gujrat</p>
       </div>  
      </div>
      </div>
    
      <!----- OWNER-MESSAGE ------>


      <div class="col-sm-12 col-md-12 col-lg-7 col-xl-7 ceo-content" style="border-left: solid #E31837 5px; margin-left: 30px ; width: 45%; border-radius: 10px; padding: 40px 30px 0px 50px; background-color: #222222; color: white; margin-top:60px;">
        <div>
        <div>
        <h1><span class="underline">Mes</span>sage From Our CEO</h1> <br>
        </div>
        <div>
        <p>
          Mr. Ghilman Kaira, owning the GWM KAIRA MOTORS GUJRAT, is known for its customer-centric approach, the company's actions and statements demonstrate a commitment to customer satisfaction and community involvement. <br>
        </p>
        </div>
        <div style="color:#E31837;">
          <h5><i class="fa-solid fa-heart"></i> Customer-Centricity & Support</h5> <br>
        </div>
        <div>
          <p>
            KAIRA MOTORS GUJRAT has demonstrated unwavering support for its customers, especially during challenging times. Our recent initiative of offering discounts on repairs after the Islamabad hailstorm exemplifies this commitment to our community.
          </p>
        </div>
        <div style="color:#E31837;">
          <h5> <i class="fa-solid fa-screwdriver-wrench"></i> After-Sales Excellence</h5> <br>
        </div>
        <div>
          <p>
            We take pride in providing top-notch after-sales service, ensuring that our relationship with customers extends well beyond the initial purchase.
          </p>
        </div>
        <div style="color: #E31837;">
          <h5> <i class="fa-solid fa-handshake"></i> Our Commitment</h5> <br>
        </div>
        <div>
          <p>
            At KAIRA MOTORS GUJRAT, we focus on: <br><br>
              Building lasting relationships with our customers <br><br>
              Creating a strong sense of community and trust <br><br>
              Providing exceptional customer service <br><br>
              Ensuring outstanding after-sales support <br><br>
          </p>
        </div>
        </div>
      </div>
    </div>

  </div>
</section>

</template>



<style scoped>

.underline{
  text-decoration: underline;
  text-decoration-color: #E31837;
  text-underline-offset: 12px;
  text-decoration-thickness: 3px;
}

.ceo img:hover{
    transform: scale(1.1);
    transition: transform 0.4s ease;
}


                          /*=====TABLET-SCREEN====*/
                          

@media only screen and (min-width: 568px) and (max-width: 992px){
.ceo{
        margin-top: 90px !important;
}
.ceo-name p{
        font-size: 15px;
}
.ceo img{
        margin-right: 200px;
        min-width: 300px;
        
}
.ceo img :hover{
        transition: 0.5;
}
.ceo-name{
        margin-left: 40px;
}
.ceo-content{
        min-width: 88%;
        margin-left: 45px !important;
}

}

                /*=====MOBILE-SCREEN====*/


@media only screen and (min-width: 200px) and (max-width: 567px){
.ceo{
        margin-top: 60px !important;
}
.ceo-name p{
        font-size: 13px;
}
.ceo img{
        margin-right: 55px;
        max-width: 200px;
        
}
.ceo-content{
        min-width: 90%;
        margin-left: 20px !important;
        padding-left: 30px!important;
        
}
    
}


</style>