<script setup>

import { ref } from 'vue'

const showModal = ref(false)
const activeCar = ref(null)
const activeImage = ref(null)
const activeTab = ref('Exterior')
 
const cars = [

                                  //=====car 1=======
  {                                                                    
    name: 'Haval H6 1.5T',
    brochure: '/pdf/h6.pdf',
    images: {
      Exterior: [
        '/images/haval-h6-1.5t/exterior/haval1.jpg',
        '/images/haval-h6-1.5t/exterior/haval1-front.jpg',
        '/images/haval-h6-1.5t/exterior/haval1-backlight.jpg',
        '/images/haval-h6-1.5t/exterior/haval1-frontlight.jpg',
        '/images/haval-h6-1.5t/exterior/haval1-tyre.jpg'
        
      ],
      Interior: [
       '/images/haval-h6-1.5t/interior/haval1-gear.jpg',
        '/images/haval-h6-1.5t/interior/haval1-lcd.jpg',
        '/images/haval-h6-1.5t/interior/haval1-meter.jpg',
        '/images/haval-h6-1.5t/interior/haval1-steering.jpg'
    ],
    },
    colors: ['Ivory White', 'Onyx Black', 'Stealth Grey']
  },

                              //=====car 2=======

{
    name: 'Haval Jolion 1.5 TURBO',
    brochure: '/pdf/jolion.pdf',
    images: {
      Exterior: [
          '/images/haval-jolion1.5-turbo/exterior/haval2.jpg',
          '/images/haval-jolion1.5-turbo/exterior/haval2-front.jpg',
        '/images/haval-jolion1.5-turbo/exterior/haval2-backlight.jpg',
        '/images/haval-jolion1.5-turbo/exterior/haval2-org.jpg',
        '/images/haval-jolion1.5-turbo/exterior/haval2-tyre.jpg'
      ],
      Interior: [
        '/images/haval-jolion1.5-turbo/interior/haval2-steering.jpg',
         '/images/haval-jolion1.5-turbo/interior/haval2-gear.jpg',
        '/images/haval-jolion1.5-turbo/interior/haval2-gear2.jpg',
        '/images/haval-jolion1.5-turbo/interior/haval2-meter.jpg',
        '/images/haval-jolion1.5-turbo/interior/haval2-sunroof.jpg'
      ],
    },
    colors: ['Red', 'Blue', 'Black']
  },

                              //=====car 3=======

    {
    name: 'Haval Jolion 1.5 HEV',
    brochure: '/pdf/h6.pdf',
    images: {
      Exterior: [
          '/images/haval-jolion1.5-hev/exterior/haval3.jpg',
          '/images/haval-jolion1.5-hev/exterior/haval3-frontlight.jpg',
        '/images/haval-jolion1.5-hev/exterior/haval3-back.jpg',
        '/images/haval-jolion1.5-hev/exterior/haval3-sidemirror.jpg',
        '/images/haval-jolion1.5-hev/exterior/haval3-tyre.jpg'
      ],
      Interior: [
        '/images/haval-jolion1.5-hev/interior/haval3-steering.jpg',
         '/images/haval-jolion1.5-hev/interior/haval3-gear.jpg',
        '/images/haval-jolion1.5-hev/interior/haval3-gear2.jpg',
        '/images/haval-jolion1.5-hev/interior/haval3-meter.jpg'
      ],
    },
    colors: ['Red', 'Blue', 'Black']
  },

                          //=====car 4=======

  {
    name: 'Haval GWM ORA',
    brochure: '/pdf/ora7.pdf',
    images: {
      Exterior: [
          '/images/ora/exterior/haval4.jpg',
          '/images/ora/exterior/haval4-frontlight.jpg',
        '/images/ora/exterior/haval4-back.jpg',
        '/images/ora/exterior/haval4-front.jpg',
        '/images/ora/exterior/haval4-org.jpg',
        '/images/ora/exterior/haval4-tyre.jpg',
        '/images/ora/exterior/haval4-sideimg.jpg'
      ],
      Interior: [
         '/images/ora/interior/haval4-gear.jpg',
        '/images/ora/interior/haval4-door.jpg',
        '/images/ora/interior/haval4-fan.jpg',
          '/images/ora/interior/haval4-roam.jpg',
        '/images/ora/interior/haval4-steering.jpg'
      ],
    },
    colors: ['Red', 'Blue', 'Black']
  },

                              //=====car 5=======

  {
    name: 'Haval Tank500',
    brochure: '/pdf/tank.pdf',
    images: {
      Exterior: [
          '/images/tank500/exterior/haval5.jpg',
          '/images/tank500/exterior/haval5-front.jpg',
        '/images/tank500/exterior/haval5-top.jpg',
        '/images/tank500/exterior/haval5-sideimg.jpg',
        '/images/tank500/exterior/haval5-org.jpg'
      ],
      Interior: [
        '/images/tank500/interior/haval5-steering.jpg',
         '/images/tank500/interior/haval5-gear.jpg',
        '/images/tank500/interior/haval5-steering2.jpg',
        '/images/tank500/interior/haval5-fan.jpg',
         '/images/tank500/interior/haval5-lcd.jpg'
      ],
    },
    colors: ['Red', 'Blue', 'Black']
  },

                              //=====car 6=======

  {
    name: 'Haval BAIC BJ40',
    brochure: '/pdf/jolion.pdf',
    images: {
      Exterior: [
          '/images/baic-bj40/exterior/haval6.jpg',
          '/images/baic-bj40/exterior/haval6-backlight.jpg',
        '/images/baic-bj40/exterior/haval6-back.jpg',
        '/images/baic-bj40/exterior/haval6-sideimg.jpg',
        '/images/baic-bj40/exterior/haval6-org.jpg'
      ],
      Interior: [
        '/images/baic-bj40/interior/haval6-steering.jpg',
         '/images/baic-bj40/interior/haval6-door2.jpg',
        '/images/baic-bj40/interior/haval6-door.jpg',
      ],
    },
    colors: ['Red', 'Blue', 'Black']
  },

                                        //=====car 7=======

  {
    name: 'Haval H6 HEV',
    brochure: '/pdf/jolion.pdf',
    images: {
      Exterior: [
          '/images/haval-h6-hev/exterior/haval7.jpg',
          '/images/haval-h6-hev/exterior/haval7-frontlight.jpg',
        '/images/haval-h6-hev/exterior/haval7-backlight.jpg',
        '/images/haval-h6-hev/exterior/haval7-tyre.jpg',
        '/images/haval-h6-hev/exterior/haval7-front.jpg'
      ],
      Interior: [
        '/images/haval-h6-hev/interior/haval7-steering.jpg',
         '/images/haval-h6-hev/interior/haval7-gear.jpg',
        '/images/haval-h6-hev/interior/haval7-lcd.jpg',
        '/images/haval-h6-hev/interior/haval7-meter.jpg'
      ],
    },
    colors: ['Red', 'Blue', 'Black']
  },

                              //=====car 8=======

  {
    name: 'Haval H6 2.0T AWD',
    brochure: '/pdf/h6.pdf',
    images: {
      Exterior: [
          '/images/haval-h6-2.0t-awd/exterior/haval8.jpg',
          '/images/haval-h6-2.0t-awd/exterior/haval8-frontlight.jpg',
        '/images/haval-h6-2.0t-awd/exterior/haval8-backlight.jpg',
        '/images/haval-h6-2.0t-awd/exterior/haval8-front.jpg',
        '/images/haval-h6-2.0t-awd/exterior/haval8-tyre.jpg'
      ],
      Interior: [
        '/images/haval-h6-2.0t-awd/interior/haval8-steering.jpg',
         '/images/haval-h6-2.0t-awd/interior/haval8-gear.jpg',
        '/images/haval-h6-2.0t-awd/interior/haval8-lcd.jpg',
        '/images/haval-h6-2.0t-awd/interior/haval8-meter.jpg'
      ],
    },
    colors: ['Red', 'Blue', 'Black']
  }
]

const openCarModal = (car) => {
  activeCar.value = car
  activeTab.value = 'Exterior'
  activeImage.value = car.images['Exterior'][0]
  showModal.value = true
}

</script>



<template>

<!-- Car list -->
<div class="container my-5 " >
  <div class="row g-4">
    <div
      class="col-12 col-sm-6 col-md-4 col-lg-3"
      v-for="car in cars"
      :key="car.name"
    >
      <div
        class="card shadow-sm hovereffect position-relative overflow-hidden" @click="openCarModal(car)" style="border-radius: 11px;">

        <!-- Car Image -->
        <img :src="car.images.Exterior[0]" class="card-img-top"  />

        <!-- Car Name Overlay -->
        <div class="position-absolute bottom-0 start-0 w-100 p-2" >
          <h6 class="m-0  fw-bold"> {{ car.name }} </h6>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- Car Detail Modal -->
<div v-if="showModal" class="modal fade show d-block" tabindex="-1">
  <div class="modal-dialog modal-lg modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h4>{{ activeCar.name }}</h4>
        <button type="button" class="btn-close" @click="showModal = false"></button>
      </div>

      <!-- Tabs -->
      <div class="modal-footer d-flex justify-content-between">
        <div>
          <button
            class="btn"
            :class="activeTab === 'Exterior' ? 'btn-dark' : 'btn-outline-dark'"
            @click="activeTab = 'Exterior'; activeImage = activeCar.images['Exterior'][0]"
          >
            Exterior
          </button>
          <button
            class="btn ms-1"
            :class="activeTab === 'Interior' ? 'btn-dark' : 'btn-outline-dark'"
            @click="activeTab = 'Interior'; activeImage = activeCar.images['Interior'][0]"
          >
            Interior
          </button>
        </div>

        <a :href="activeCar.brochure" target="_blank" class="btn btn-dark">
          <i class="bi bi-download"></i> Download Brochure
        </a>
      </div>

      <div class="modal-body row">
        <!-- Left thumbnails -->
        <div class="col-3 border-end" style="max-height:400px; overflow-y:auto;">
          <button
            v-for="img in activeCar.images[activeTab]"
            :key="img"
            class="btn p-0 mb-2 w-100"
            @click="activeImage = img"
          >
            <img :src="img" class="img-fluid rounded" />
          </button>
        </div>

        <!-- Main image -->
        <div class="col-9 text-center">
          <img :src="activeImage" class="img-fluid" style="max-height:400px;" />
        </div>
      </div>
    </div>
  </div>
</div>

<!-- Modal backdrop -->
<div v-if="showModal" class="modal-backdrop fade show"></div>


</template>



<style scoped>
.bg{
  background-color: #212529;
}
.hovereffect:hover{
        transition: 0.5s;
    transform: translateY(-6px);
}

        
                         /*=====TABLET-SCREEN====*/


@media only screen and (min-width: 568px) and (max-width: 992px){

}


                         /*=====MOBILE-SCREEN====*/
 
@media only screen and (min-width: 200px) and (max-width: 567px){
}



</style>