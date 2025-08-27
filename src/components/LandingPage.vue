<script setup>
import {Icon} from '@iconify/vue'
import Header from './Header.vue'
import Hero from './Hero.vue'
import About from './About.vue'
import Owner from './Owner.vue'
import CarGallery from './CarGallery.vue'
import Deliveries from './Deliveries.vue'
import Services from './Services.vue'
import Reviews from './Reviews.vue'
import Faq from './Faq.vue'
import ContactUs from './ContactUs.vue'
import WhatsAppButton from './WhatsAppButton.vue'
import Footer from './Footer.vue'


</script>

<template>

<Header />
<Hero />
<About />
<Owner />
<CarGallery />
<Deliveries />
<Services />
<Reviews />
<Faq />
<ContactUs />
<WhatsAppButton />
<Footer />


</template>

<style scoped>
    
*{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
        scroll-behavior: smooth;
        
}
template{
        overflow-x: hidden;
} 

</style>



<!---  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
<script>
  document.addEventListener('click', function (e) {
    if (!e.target.classList.contains('thumb')) return;
    const target = e.target.getAttribute('data-target');
    const main = document.querySelector('img[data-main="' + target + '"]');
    if (main) main.src = e.target.src;
  });
</script>    --->