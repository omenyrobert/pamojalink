<template>
  <div>
   <h3 class="text-center">Testimonies</h3>
    <VueSlickCarousel v-bind="settings">
     <div v-for="review in reviews" :key="review.id"> 
      <div class="m-3 p-3 shadow">
        <div id="imgBox">
 <img id="img1" :src="review.image">
        </div>
     
      <br/>
      <h5>{{review.name}}</h5>
      <p>{{review.Comment}}</p>
      </div></div>

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
      reviews:[
        {
       id: 1,
       name: "Andrew Busuulwa",
       image: "https://media.istockphoto.com/photos/portrait-of-an-african-american-man-with-glasses-picture-id502581380?k=20&m=502581380&s=612x612&w=0&h=XDn7wKdHjehbgrjEcaDOPOXneshxUiGjgEqpXKFSO18=",
       Comment: "Brokers did treat me well and took my money without getting for a house to buy but pamoja property link came and save me",
        },
           {
       id: 2,
       name: "Stella Kasujja",
       image: "https://media.istockphoto.com/photos/portrait-of-a-smiling-african-woman-picture-id1296154941?k=20&m=1296154941&s=612x612&w=0&h=_NER3lja51CiwN0J57yycvr7T70qFEouP17NJV8K948=",
       Comment: "I bought my first house when i was from London so easily and fast",
        },
           {
       id: 3,
       name: "Nancy Nakato",
       image: "https://media.istockphoto.com/photos/laughing-young-african-american-woman-with-arms-crossed-on-white-picture-id945445866?k=20&m=945445866&s=612x612&w=0&h=c_ryLhv_aV1chE8mo33kGESGc15uktfme2tcE6eZPCc=",
       Comment: "Selling my home and land to clear my loans and start a busy was very smooth and easy with pamoja",
        },
           {
       id: 4,
       name: "Eric Denis",
       image: "https://media.istockphoto.com/photos/attractive-man-looking-at-the-camera-picture-id182385083?k=20&m=182385083&s=612x612&w=0&h=m_aWdu-RpyTGTk2n6lja2kOe7N_bBzQhmIHKMyeZDxw=",
       Comment: "I never thought i would get a very cheap and beautiful good condition house but with pamoja that was very possible",
        },
           {
       id: 5,
       name: "Jamada Ronnie",
       image: "https://media.istockphoto.com/photos/african-athletic-man-portrait-picture-id1146745072?k=20&m=1146745072&s=612x612&w=0&h=ahxUw_9A4B6DH_hzHPPSWU-uXHlQbWI488_MzonHOSE=",
       Comment: "I bought an apartment from pamoja property link and it was a very great experience and i feel like doind it again",
        },
           {
       id: 6,
       name: "Kyler Brandon",
       image:"https://i.pinimg.com/564x/18/9c/c2/189cc2cafef0269cc5fdbd6f926f68f1.jpg",
       Comment: "I really wanted to sell my restaurant and i was so stuck until Pamoja property link helped me and sold it very fast",
        },
           {
       id: 7,
       name: "Martha Kisakye",
       image: "https://i.pinimg.com/236x/d9/ca/9b/d9ca9b7c97124d97d32e12952db05a80.jpg",
       Comment: "I never thought buying land could be so easy but pamoja property link made it so easy ",
        }


      ],
        settings: 
{
  "dots": true,
  "infinite": true,
  "speed": 600,
  "slidesToShow": 4,
  "slidesToScroll": 4,
  "initialSlide": 1,
  "autoplay": true,
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
        "slidesToScroll": 2
      }
    }
  ]
}
        
    }
}
  }
</script> 
<style scoped>
#img1{
  width: 80%;
  z-index: -100;
    border: 5px #b00808 solid;
  border-radius: 100%;
}
#imgBox{
  height: 200px;
  width: 200px;
}
</style>