<template>
  <div>
   <h3 class="text-center">Recent Sales</h3>
    <VueSlickCarousel v-bind="settings">
     <div v-for="latest in latests" :key="latest.id"> 
      <div class="m-3">
        <img class="w-100" :src="latest.photo">
    <div class="border-2 cursor-pointer" id="card">
  <div>

  </div>
  <div class="mt-2 mx-1 pb-2" id="contentt">
    <div id="namee" class="px-2" >{{ latest.name}}</div>
    <div  id="amountt">UGX{{latest.amount}}</div>
  </div>
    <div class="border-bottom-2 mx-1 flex" id="lowerr">
    <div class="p-2" id="border1"><i  id="iconn" class="bi bi-house"></i><br/> {{ latest.bedrooms}}</div>
    <div class="p-2" id="locationn"><i id="iconn" class="bi bi-geo-alt"></i><br/> {{latest.location}}</div>
    <div class="p-2" id="landd"><i class="bi bi-geo-fill" id="iconn"></i><br/> {{latest.land}}</div>
  </div>
  </div>
      </div>
     </div>

    </VueSlickCarousel>
  </div>
</template>
 
<script>
  import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  // optional style for arrows & dots
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
 
  export default {
    name: 'latestSales',
    components: { VueSlickCarousel },
data(){
    return {
      latests: [
        {
          id: 1,
          code: "PL001",
          name: "Hostels for Makerere",
          amount:  "89,000,000",
          bedrooms:"3",
          land: "4 hecters",
          location: "Mukono Seeta",
          category: "Mortgage",
          photo:
            "https://media.istockphoto.com/photos/young-hispanic-couple-doing-heart-symbol-with-fingers-and-holding-key-picture-id1327847528?b=1&k=20&m=1327847528&s=170667a&w=0&h=VgSWMywIbnDdI3YSNEF21agdlqskyvwrS1OUJUY-Noo=",
        },
        {
          id: 2,
          code: "PL002",
          name: "Appartments in Bugologbi",
          amount:  "109,000,000",
          bedrooms:"3",
          land: "4 hecters",
          location: "Kampala Bugolobi",
          category: "Mortgage",
          photo:
            "https://media.istockphoto.com/photos/empty-white-new-construction-cottage-latest-just-completed-picture-id1128971960?k=20&m=1128971960&s=612x612&w=0&h=aFsHnnUSVGzgFoKVR0humPn0EBCAQIvz_laAjnzqXsY=",
        },
        {
          id: 3,
          code: "PL003",
          name: "Well Established bar",
          amount:  "60,000,000",
          bedrooms:"4",
          land: "4 hecters",
          location: "Mukono Seeta",
          category: "Sell",
          photo:
            "https://media.istockphoto.com/photos/close-up-of-a-happy-homeowners-receiving-their-new-house-keys-from-a-picture-id1279143627?b=1&k=20&m=1279143627&s=170667a&w=0&h=HR0tUCj9MlrDU3TB72A_R3iMZePHbqRCJHy80ZmNuV0=",
        },
        {
          id: 4,
          code: "PL004",
          name: "Land and Farm",
          amount:  "89,000,000",
          bedrooms:"3",
          land: "4 hecters",
          location: "Luweero",
          category: "Mortgage",
          photo:
            "https://media.istockphoto.com/photos/this-sofa-would-be-perfect-picture-id1011283464?k=20&m=1011283464&s=612x612&w=0&h=yEvUqhWLR6wWCIqft9pcrGMcJukPZJlzJ3SkLux85eg=",
        },
                {
          id: 5,
          code: "PL005",
          name: "Restaurant ",
          amount:  "89,000,000",
          bedrooms:"3",
          land: "4 hecters",
          location: "Ntinda",
          category: "Sell",
          photo:
            "https://media.istockphoto.com/photos/couple-holding-new-home-key-while-standing-in-own-house-picture-id1323925806?k=20&m=1323925806&s=612x612&w=0&h=EB9zGgYAZZ3CCdQFx3wUbiponQ4OWDwEB_oUoYhxjG0=",
        },
        {
          id: 6,
          code: "PL006",
          name: "Rentals",
          amount:  "59,000,000",
          bedrooms:"3",
          land: "4 hecters",
          location: "Kireka",
          category: "Mortgage",
          photo:
            "https://media.istockphoto.com/photos/cheerful-africanamerican-guy-waving-hand-into-selfie-camera-of-the-picture-id1321508654?k=20&m=1321508654&s=612x612&w=0&h=-IQqNQ5eOV-d8ZE-i-7gXucJ5lcxOvjU1ZpvtwsDaeU=",
        },
        {
          id: 7,
          code: "PL007",
          name: "Well Established bar",
          amount:  "60,000,000",
          bedrooms:"4",
          land: "4 hecters",
          location: "Mukono Seeta",
          category: "Sell",
          photo:
            "https://media.istockphoto.com/photos/happy-mature-couple-at-home-picture-id1330426121?k=20&m=1330426121&s=612x612&w=0&h=m0lHCWV6oicAjrbJkwPHP-00kkCe59E6fjKJKD1m8Ig=",
        },
        {
          id: 8,
          code: "PL008",
          name: "Land and Farm",
          amount:  "89,000,000",
          bedrooms:"3",
          land: "4 hecters",
          location: "Luweero",
          category: "Mortgage",
          photo:
            "https://media.istockphoto.com/photos/happy-couple-with-boxes-moving-to-new-home-picture-id1307391438?k=20&m=1307391438&s=612x612&w=0&h=yoRGtHwalDlfRVG2OqL7Q-BpKhy08QoMEtbsKVoF7XU=",
        },
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
        "slidesToShow": 1,
        "slidesToScroll": 1,
        "initialSlide": 1
      }
    },
    {
      "breakpoint": 480,
      "settings": {
        "slidesToShow": 1,
        "slidesToScroll": 1
      }
    }
  ]
}
        
    }
}
  }
</script> 
<style scoped>
#category-section{
  margin-left: 100px;
  margin-right: 100px;
}
#locationn{
  border-right: 1px #cccccc solid; width: 50%; font-size: 13px; text-align: center;
}
#landd{
  width: 25%; font-size: 13px; text-align: center;
}
#iconn{
  color: #b00808;
}
#amountt{
  color: #b00808; width: 45%; font-weight: bold; font-size: 14px; padding-left: 7px;
}
#lowerr{
  display: flex; justify-content: space-around;
}
#border1{
  border-right: 1px #cccccc solid; width: 25%; font-size: 13px; text-align: center;
}
#contentt{
  display: flex; border-bottom: 1px #cccccc solid; justify-content: space-around;
}
#namee{
  font-size: 13px; border-right: 1px #cccccc solid; width: 55%;
}
#card{
   box-shadow: 1px 2px 6px #888888;
}
#card:hover{
  box-shadow: 5px 10px 18px #888888;
  /* border: 10px #000 solid; */
}
.search{
  width: 50%; padding-left: 20px;
}
.categories{
  background-color: #b008080a;
  border-radius: 15px;
  display: flex;
  justify-content: space-around;
  height: 50px;
  margin: 10px;
  padding: 10px;
  color: #b00808;
}
.categories:hover{
  background-color: #b00808;
  color: #fff;
}
.overlay{
  height: 80vh;
  background-color: rgba(0, 0, 0, 0.5); margin-top: -80vh; padding-top: 8%;
}
.slide1{
background-image: url('https://res.cloudinary.com/dtlkiv19d/image/upload/v1659273740/Kallery/pamoja/pl1-min_ziesl2.jpg');
/* background-attachment: fixed; */
background-position: center;
background-repeat: no-repeat;
background-size: 100%;
  height: 80vh;
}
.slide2{
background-image: url('https://res.cloudinary.com/dtlkiv19d/image/upload/v1659273810/Kallery/pamoja/h14-min_r88gvs.jpg');
/* background-attachment: fixed; */
background-position: center;
background-repeat: no-repeat;
background-size: 100%;
  height: 80vh;
}
.slide3{
background-image: url('https://res.cloudinary.com/dtlkiv19d/image/upload/v1659273778/Kallery/pamoja/pl2-min_p2mk2o.jpg');
/* background-attachment: fixed; */
background-position: center;
background-repeat: no-repeat;
background-size: 100%;
  height: 80vh;
}
.slide4{
background-image: url('https://res.cloudinary.com/dtlkiv19d/image/upload/v1659273740/Kallery/pamoja/pl1-min_ziesl2.jpg');
/* background-attachment: fixed; */
background-position: center;
background-repeat: no-repeat;
background-size: 100%;
  height: 80vh;
}
.slide5{
background-image: url('https://res.cloudinary.com/dtlkiv19d/image/upload/v1659273754/Kallery/pamoja/h16-min_kqxx5w.jpg');
/* background-attachment: fixed; */
background-position: center;
background-repeat: no-repeat;
background-size: 100%;
  height: 80vh;
}
#about-section{
  margin: 100px;
}

@media only screen and (max-width: 600px) {
.banner-title{
  font-size: 17px;
}
.categories{
  margin: 5px;
}
#category-section{
  margin-left: 5px;
  margin-right: 5px;
}
#card{
  width: 140%;
  margin-left: -50px;
}
.featured{
  margin-top: 3vh;
}
#cate{
    margin-left: -10vw;
}
.banner-slide{
  margin-top: -200px;
}
.overlay{
  height: 25vh;
  margin-top: -53vh;
}
.search{
  width: 70%; padding-left: 10px;
}
.banner-sub-title{
  display: none;
}
#about-section{
  margin: 10px;
}
}

</style>
