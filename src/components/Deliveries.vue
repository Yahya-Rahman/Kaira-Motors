<script setup>

import { ref } from 'vue'
import VueEasyLightbox from 'vue-easy-lightbox'

const visible = ref(false)
const index = ref(0)

const images = [
   '/images/deliveries/1.jpg',
  '/images/deliveries/2.jpg',
  '/images/deliveries/3.jpg',
  '/images/deliveries/4.jpg',
  '/images/deliveries/5.jpg',
  '/images/deliveries/6.jpg',
  '/images/deliveries/7.jpg',
  '/images/deliveries/8.jpg',
  '/images/deliveries/9.jpg',
  '/images/deliveries/10.jpg',
  '/images/deliveries/11.jpg',
  '/images/deliveries/12.jpg',
  '/images/deliveries/13.jpg',
  '/images/deliveries/14.jpg',
]

const showImg = (i) => {
  index.value = i
  visible.value = true
}


</script>



<template style="background-color: #F8F9FA;" >


                  <!--- HEADING----->

<div class="pt-5 pb-3 text-center" style="color: #333333" id="delivery">
  <h1 class="fw-bold">Recen<span class="underline">t Deli</span>veries</h1>
</div>


                           
 <div class="container my-4">
    <div class="row g-2">
      <div
        class="col-12 col-sm-6 col-md-4 col-lg-3 m"
        v-for="(src, i) in images"
        :key="i"
      >
        <img
          :src="src"
          class="img-fluid rounded shadow hovereffect thumb"
          @click="showImg(i)"
        />
      </div>
    </div>
  </div>

  <VueEasyLightbox
    :visible="visible"
    :imgs="images"
    :index="index"
    @hide="visible = false"
  />




          <!--- DELIVERY-BUTTON----->

<div class="text-center mt-5 mb-5">
  <button type="button" class="btn btn-primary btn-lg">Book Your Delivery</button>
</div>                        


</template>



<style scoped>

.hovereffect:hover{
        transition: 0.5s;
    transform: translateY(-6px);
}

.thumb {
  width: 400px;
  cursor: pointer;
  border-radius: 15px;
  margin-top: 15px;
}


.underline{
  text-decoration: underline;
  text-decoration-color: #E31837;
  text-underline-offset: 16px;
  text-decoration-thickness: 3px;
}

</style>