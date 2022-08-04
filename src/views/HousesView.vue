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
<div class="col-md-3 p-3" v-for="house in houses" :key="house.id">
  <div class="border-2 cursor-pointer" id="card">
  <div>
    <img class="w-100" :src="house.photo">
  </div>
  <div class="mt-2 mx-1 pb-2" style="display: flex; border-bottom: 1px #cccccc solid; justify-content: space-around;">
    <div style="font-size: 13px; border-right: 1px #cccccc solid; width: 55%;" class="px-2" >{{ house.name}}</div>
    <div  style="color: #b00808; width: 45%; font-weight: bold; font-size: 14px; padding-left: 7px;">UGX{{house.amount}}</div>
  </div>
    <div class="border-bottom-2 mx-1" style="display: flex; justify-content: space-around;">
    <div class="p-2" style="border-right: 1px #cccccc solid; width: 25%; font-size: 13px; text-align: center;"><i class="bi bi-house" style="color: #b00808;"></i><br/> {{ house.bedrooms}}</div>
    <div class="p-2" style="border-right: 1px #cccccc solid; width: 50%; font-size: 13px; text-align: center;"><i style="color: #b00808;" class="bi bi-geo-alt"></i><br/> {{house.location}}</div>
    <div class="p-2" style="width: 25%; font-size: 13px; text-align: center;"><i class="bi bi-geo-fill" style="color: #b00808; "></i><br/> {{house.land}}</div>
  </div>
  </div>

</div>
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
      houses: [
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
            "https://media.istockphoto.com/photos/exterior-facade-of-a-white-new-construction-house-picture-id1223041319?k=20&m=1223041319&s=612x612&w=0&h=uc52sJhQPAHoGHqjGmDUsJhtl1fXRc3HsD1QFn0IqO4=",
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
            "https://media.istockphoto.com/photos/empty-white-new-construction-cottage-house-just-completed-picture-id1128971960?k=20&m=1128971960&s=612x612&w=0&h=aFsHnnUSVGzgFoKVR0humPn0EBCAQIvz_laAjnzqXsY=",
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
            "https://media.istockphoto.com/photos/simple-but-modern-house-design-picture-id172255695?k=20&m=172255695&s=612x612&w=0&h=fUtqjF1b3VDPCTJFeH4kBy5HAc_jM5bzu8yOjidRSEA=",
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
            "https://media.istockphoto.com/photos/side-and-real-view-of-craftsman-house-picture-id1158713212?k=20&m=1158713212&s=612x612&w=0&h=TOV1x9nl0vOH2i4pjamQVMwCYoWSerl6sIvJbVWZ7FI=",
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
            "https://media.istockphoto.com/photos/back-yard-of-two-story-home-picture-id1348833319?k=20&m=1348833319&s=612x612&w=0&h=0dfiAVxuzb9gWp7CxOk-bZragh-sYgEQPbQKQSo7NBQ=",
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
            "https://media.istockphoto.com/photos/beige-and-brown-siding-house-exterior-picture-id585780354?k=20&m=585780354&s=612x612&w=0&h=II0u7xPTi6nPGmvYTJGoxa7JjwDdeMM1EeHbuJfoD2c=",
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
            "https://media.istockphoto.com/photos/new-modern-home-in-gray-with-a-green-lawn-picture-id175505035?k=20&m=175505035&s=612x612&w=0&h=dkv5viEDOh44lNkv6xwBTaEIsAZnJE7hz70W0enz-U0=",
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
            "https://media.istockphoto.com/photos/traditional-northwest-home-with-driveway-picture-id480774836?k=20&m=480774836&s=612x612&w=0&h=jg_MG29H6zqWGJcqjguwDTmd9ZQQgej8GYyXrEHSQJ8=",
        },
                {
          id: 9,
          code: "PL001",
          name: "Hostels for Makerere",
          amount:  "89,000,000",
          bedrooms:"3",
          land: "4 hecters",
          location: "Mukono Seeta",
          category: "Mortgage",
          photo:
            "https://media.istockphoto.com/photos/exterior-facade-of-a-white-new-construction-house-picture-id1223041319?k=20&m=1223041319&s=612x612&w=0&h=uc52sJhQPAHoGHqjGmDUsJhtl1fXRc3HsD1QFn0IqO4=",
        },
        {
          id: 10,
          code: "PL002",
          name: "Appartments in Bugologbi",
          amount:  "109,000,000",
          bedrooms:"3",
          land: "4 hecters",
          location: "Kampala Bugolobi",
          category: "Mortgage",
          photo:
            "https://media.istockphoto.com/photos/empty-white-new-construction-cottage-house-just-completed-picture-id1128971960?k=20&m=1128971960&s=612x612&w=0&h=aFsHnnUSVGzgFoKVR0humPn0EBCAQIvz_laAjnzqXsY=",
        },
        {
          id: 11,
          code: "PL003",
          name: "Well Established bar",
          amount:  "60,000,000",
          bedrooms:"4",
          land: "4 hecters",
          location: "Mukono Seeta",
          category: "Sell",
          photo:
            "https://media.istockphoto.com/photos/simple-but-modern-house-design-picture-id172255695?k=20&m=172255695&s=612x612&w=0&h=fUtqjF1b3VDPCTJFeH4kBy5HAc_jM5bzu8yOjidRSEA=",
        },
        {
          id: 12,
          code: "PL004",
          name: "Land and Farm",
          amount:  "89,000,000",
          bedrooms:"3",
          land: "4 hecters",
          location: "Luweero",
          category: "Mortgage",
          photo:
            "https://media.istockphoto.com/photos/side-and-real-view-of-craftsman-house-picture-id1158713212?k=20&m=1158713212&s=612x612&w=0&h=TOV1x9nl0vOH2i4pjamQVMwCYoWSerl6sIvJbVWZ7FI=",
        },
                {
          id: 13,
          code: "PL005",
          name: "Restaurant ",
          amount:  "89,000,000",
          bedrooms:"3",
          land: "4 hecters",
          location: "Ntinda",
          category: "Sell",
          photo:
            "https://media.istockphoto.com/photos/back-yard-of-two-story-home-picture-id1348833319?k=20&m=1348833319&s=612x612&w=0&h=0dfiAVxuzb9gWp7CxOk-bZragh-sYgEQPbQKQSo7NBQ=",
        },
        {
          id: 14,
          code: "PL006",
          name: "Rentals",
          amount:  "59,000,000",
          bedrooms:"3",
          land: "4 hecters",
          location: "Kireka",
          category: "Mortgage",
          photo:
            "https://media.istockphoto.com/photos/beige-and-brown-siding-house-exterior-picture-id585780354?k=20&m=585780354&s=612x612&w=0&h=II0u7xPTi6nPGmvYTJGoxa7JjwDdeMM1EeHbuJfoD2c=",
        },
        {
          id: 15,
          code: "PL007",
          name: "Well Established bar",
          amount:  "60,000,000",
          bedrooms:"4",
          land: "4 hecters",
          location: "Mukono Seeta",
          category: "Sell",
          photo:
            "https://media.istockphoto.com/photos/new-modern-home-in-gray-with-a-green-lawn-picture-id175505035?k=20&m=175505035&s=612x612&w=0&h=dkv5viEDOh44lNkv6xwBTaEIsAZnJE7hz70W0enz-U0=",
        },
        {
          id: 16,
          code: "PL008",
          name: "Land and Farm",
          amount:  "89,000,000",
          bedrooms:"3",
          land: "4 hecters",
          location: "Luweero",
          category: "Mortgage",
          photo:
            "https://media.istockphoto.com/photos/traditional-northwest-home-with-driveway-picture-id480774836?k=20&m=480774836&s=612x612&w=0&h=jg_MG29H6zqWGJcqjguwDTmd9ZQQgej8GYyXrEHSQJ8=",
        },
      ],
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
