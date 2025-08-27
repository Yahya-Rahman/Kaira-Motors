<script setup>
const phoneNumber = "923001234567" // replace with your WhatsApp number
const message = "Hello! I want to know more." // optional default message

// Generate WhatsApp link
const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
</script>

<template>
  <a
    :href="whatsappLink"
    target="_blank"
    rel="noopener noreferrer"
    class="whatsapp-float"
  >
    <i class="fa-brands fa-whatsapp"></i>
  </a>
</template>

<style scoped>
.whatsapp-float {
  position: fixed;
  width: 60px;
  height: 60px;
  bottom: 20px;
  right: 20px;
  background-color: #25d366;
  color: white;
  border-radius: 50%;
  text-align: center;
  font-size: 32px;
  box-shadow: 2px 2px 8px rgba(0,0,0,0.3);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s;
}

.whatsapp-float:hover {
  transform: scale(1.1);
}
</style>