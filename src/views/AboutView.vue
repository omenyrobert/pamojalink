<template>
  <div>
  <navbar/>
 <div style="width: 100%; height: 80vh; background-size: 100%; background-position: center; background-repeat: no-repeat; background-image: url('https://res.cloudinary.com/dtlkiv19d/image/upload/v1659273740/Kallery/pamoja/pl1-min_ziesl2.jpg');">
<br/>
<br/>

<div class="p-5" style="background-color: rgba(0, 0, 0, 0.8); width: 400px;">
<h1 class="text-white">About Us</h1>
</div>
 </div>
 <br/>
 <h3>About Us</h3>
 <p class="m-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
  
  <compfooter/>
  </div>
</template>

<script>
import navbar from '../components/navbar.vue'
import Compfooter from '../components/Compfooter.vue'

export default {
  name:'AboutView',
  components: { Compfooter,navbar },

}
</script>

<style>

</style>
