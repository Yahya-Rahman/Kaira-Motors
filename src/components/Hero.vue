<script setup>
</script>

<template>
<section>
  <div id="carouselExample" class="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="/images/slider/hero-img1.jpg" class="d-block w-100 img-fluid" alt="Haval-SUV">
      </div>
      <div class="carousel-item">
        <img src="/images/slider/hero-img2.jpg" class="d-block w-100 img-fluid" alt="Haval-H6">
      </div>
      <div class="carousel-item">
        <img src="/images/slider/hero-img3.jpg" class="d-block w-100 img-fluid" alt="Haval-Jolion">
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</section>
</template>

<style scoped>
/* ===== DESKTOP IMAGE HEIGHT ===== */
.carousel-inner img {
  height: 580px;
  object-fit: cover; /* keeps aspect ratio and avoids stretching */
}

/* ===== TABLET SCREEN ===== */
@media only screen and (min-width: 568px) and (max-width: 992px) {
  .showroom img {
    width: 500px;
  }
}

/* ===== MOBILE SCREEN ===== */
@media only screen and (min-width: 200px) and (max-width: 567px) {
  .carousel-inner img {
    height: 400px; /* smaller for mobile */
    object-fit: cover;
  }
}
</style>
