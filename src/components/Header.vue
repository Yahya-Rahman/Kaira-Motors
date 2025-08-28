<script setup>
import {ref, onMounted, onUnmounted} from 'vue';


    const isOpen = ref(false);
    const brochures = ref([
    {name: 'Haval H6', path: '/pdf/h6.pdf' },
    {name: 'Haval Jolion', path: '/pdf/jolion.pdf' },
    {name: 'GWM ORA', path: '/pdf/ora.pdf' },
    {name: 'GWM ORA7', path: '/pdf/ora7.pdf' },
    {name: 'GWM Tank', path: '/pdf/tank.pdf' }
    ]);

    const openPdf= (path) => {
      window.open(path, '_blank');
    };

    const toggleDropdown = () => {
      isOpen.value = !isOpen.value;
    };

    const handleClickOutside = (event) => {
      if (!event.target.closest('.dropdown')) {
        isOpen.value = false;
  }
    };

    onMounted(() => {
      document.addEventListener('click', handleClickOutside);
    });

    onUnmounted (() => {
      document.removeEventListener('click', handleClickOutside);
    });

   
 

</script>



<template>

        <!--- LOGO----->


<header>
    <nav class="navbar navbar-expand-lg bg-dark ">
  <div class="container-fluid">
    <a class="navbar-brand logo" href="#home">
      <img src="/images/kiara-motor/logo.jpg" class="img-fluid w-50" style="margin-left: 100px;"  alt="Haval">
    </a>
     <button class="navbar-toggler bg-white " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  
        <!--- NAVBAR-BUTTONS----->


    <div class="collapse navbar-collapse" id="navbarSupportedContent" :id="home">
      <ul class="navbar-nav nav-btn me-5 pe-5 fw-bold  gap-2 fs-6 mb-lg-0">
        <li class="nav-item ">
          <router-link to="#home" class="nav-link active text-white" aria-current="page">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="#about" class="nav-link text-white">About Us</router-link>
        </li>
        <li class="nav-item">
          <router-link to="#owner" class="nav-link text-white" >CEO's Message</router-link>
        </li>
         <li class="nav-item">
          <router-link to="#delivery" class="nav-link text-white" >Recent Deliveries</router-link>
        </li>
         <li class="nav-item">
          <router-link to="#services" class="nav-link text-white" >Services</router-link>
        </li>
         <li class="nav-item">
          <router-link to="#reviews" class="nav-link text-white" >Testimonials</router-link>
        </li>
         <li class="nav-item">
          <router-link to="#faq" class="nav-link text-white" >FAQ</router-link>
        </li>
         <li class="nav-item">
          <router-link to="#contact" class="nav-link text-white" >Contact</router-link>
        </li>
         <li class="nav-item">
          <div class="dropdown">
          <router-link to="/" class="nav-link text-white dropbtn" @click="toggleDropdown" >Brochures</router-link>
          <div v-show="isOpen" class="dropdown-content">
            <button v-for="brochure in brochures" :key="brochure.name" class="dropdown-item-custom" @click="openPdf(brochure.path)"><i class="fa-solid fa-file-pdf"></i>{{ brochure.name }}</button>
          </div>
          </div>
        </li>
         <li class="nav-item">
          <router-link to="/login" target="_blank" class="nav-link text-white" >Login</router-link>
        </li>
         </ul>
    
    </div>
  </div>
</nav>
</header>

</template>



<style scoped>
/* Dropdown container */
.dropdown {
  position: relative;
  display: inline-block;
}

/* Trigger button (Brochures link) */
.dropbtn {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
}

/* Dropdown content box */
.dropdown-content {
  position: absolute;
  top: 100%; /* show below button */
  left: 0;
  min-width: 180px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  padding: 6px 0;
  z-index: 1000;
}

/* Dropdown buttons */
.dropdown-content button {
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  padding: 8px 14px;
  border: none;
  background: none;
  text-align: left;
  font-size: 14px;
  cursor: pointer;
  transition: background 0.2s ease;
}

/* Hover effect */
.dropdown-content button:hover {
  background-color: #f3f3f3;
}

/* PDF icon (if using fontawesome or svg) */
.dropdown-content button i {
  color: #e63946; /* red for PDF icon */
  font-size: 16px;
}


.nav-item a:hover{
    transform: scale(1.1);
    transition: transform 0.4s ease;
    color:  #E31837!important;

}
.logo img:hover{
    transform: scale(1.1);
    transition: transform 0.4s ease;
}



                  /*=====TABLET-SCREEN====*/


@media only screen and (min-width: 568px) and (max-width: 992px){
.logo img{
        margin-left: 30px !important;
}
.nav-btn{
        margin-top: 20px;
        
}
.nav-item a {
        font-size: 20px;
}
}


                /*=====MOBILE-SCREEN====*/


@media only screen and (min-width: 200px) and (max-width: 567px){
.logo img{
        margin-left: 1px !important;
        width: 200px !important;
}
.nav-btn{
        margin-top: 20px;
}
.nav-item a {
        font-size: 20px;
}
}


</style>