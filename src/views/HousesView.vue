<template>
  <div>
  <navbar/>
 <div style="width: 100%; height: 80vh; background-size: 100%; background-position: center; background-repeat: no-repeat; background-image: url('https://res.cloudinary.com/dtlkiv19d/image/upload/v1659273740/Kallery/pamoja/pl1-min_ziesl2.jpg');">
<br/>
<br/>

<div class="p-5" style="background-color: rgba(0, 0, 0, 0.8); width: 400px;">
<h1 class="text-white">Houses</h1>
</div>
<br/>
  <div style="display: flex; justify-content: center;">
      <br/>
<input class="search" type="text" placeholder="Search Appartments, land, houses"><i class="bi bi-search p-3" style="background-color: #b00808; color: #fff;"></i>
  </div>
 </div>
 <br/>
 <h3>Houses For Sale</h3>
 <div class="row mx-5">
<h1>Coming Soon</h1>
</div>
  <compfooter/>
  </div>
</template>

<script>
import navbar from '../components/navbar.vue'
import Compfooter from '../components/Compfooter.vue'

export default {
  name:'HousesView',
  components: { Compfooter,navbar },
data(){
  return{
  }
}
}
</script>

<style>
.search{
  width: 50%; padding-left: 20px;
}
#card{
   box-shadow: 1px 2px 6px #888888;
}
#card:hover{
  box-shadow: 5px 10px 18px #888888;
  /* border: 10px #000 solid; */
}

@media only screen and (max-width: 600px) {
#card{
  width: 140%;
  margin-left: -50px;
}
.search{
  width: 70%; padding-left: 10px;
}
}
</style>
