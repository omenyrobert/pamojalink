<template>
  <div>
   <h3 class="text-center">Testimonies</h3>
    <VueSlickCarousel v-bind="settings">
     <div> <h1 style="background-color: #000; height: 300px;">hello2</h1></div>
      <div> <h1 style="background: #0f00; height: 300px;">hello3</h1></div>
      <div> <h1 style="background: #ff000; height: 300px;">hello4</h1></div>
      <div> <h1 style="background: #ff0000; height: 300px;">hello4</h1></div>
    </VueSlickCarousel>
  </div>
</template>
 
<script>
  import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  // optional style for arrows & dots
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
 
  export default {
    name: 'SliderSlider',
    components: { VueSlickCarousel },
data(){
    return {
        settings: 
{
  "dots": true,
  "infinite": false,
  "speed": 500,
  "slidesToShow": 4,
  "slidesToScroll": 4,
  "initialSlide": 0,
  "responsive": [
    {
      "breakpoint": 1024,
      "settings": {
        "slidesToShow": 3,
        "slidesToScroll": 3,
        "infinite": true,
        "dots": true
      }
    },
    {
      "breakpoint": 600,
      "settings": {
        "slidesToShow": 2,
        "slidesToScroll": 2,
        "initialSlide": 2
      }
    },
    {
      "breakpoint": 480,
      "settings": {
        "slidesToShow": 2,
        "slidesToScroll": 1
      }
    }
  ]
}
        
    }
}
  }
</script> 