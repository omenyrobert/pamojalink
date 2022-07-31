<template>
<div>
<navbar/>
<div id="carouselExampleControls" class="carousel banner-slide slide" data-bs-ride="carousel" style="z-index: -100;">
   <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active slide1">
    </div>
    <div class="carousel-item slide2">
    </div>
    <div class="carousel-item slide3">
    </div>
        <div class="carousel-item slide4">
    </div>
        <div class="carousel-item slide5">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
<div class="overlay">
       <h1 class="text-white banner-title " style="text-align: center;">Buying and Selling Property Simplified</h1>
       <p class="text-white banner-sub-title" style="text-align: center; margin-left: 30%; margin-right: 30%;">We sell and buy various types of property like houses, apartments, hostels, rentals, Offices, land, restaurants and bars</p>
       <br/>
  <div style="display: flex; justify-content: center;">
      <br/>
<input class="search" type="text" placeholder="Search Appartments, land, houses"><i class="bi bi-search p-3" style="background-color: #b00808; color: #fff;"></i>
  </div>
</div>
<div class="row container mx-5" style="margin-left: 20%;">
  <div class="col-md-3">
    <div class="categories">
      <i class="bi bi-building"></i>
      <p>Apartments</p>

    </div>
  </div>
  <div class="col-md-3 ">
    <div class="categories">
      <i class="bi bi-house-door-fill"></i>
<p>Houses</p>
    </div>
  </div>
    <div class="col-md-3 ">
      <div class="categories">
        <i class="bi bi-bricks"></i>
<p>Hostels</p>
      </div>
  </div>
    <div class="col-md-3">
      <div class="categories">
        <i class="bi bi-shop"></i>
<p>Bars & Restaurants</p>
      </div>
  </div>
</div>
<div class="row container m-5" style="margin-left: 20%;">
  <div class="col-md-6">
    <img style="width: 100%;" src="https://media.istockphoto.com/photos/young-african-woman-relaxing-at-home-with-a-digital-tablet-picture-id896374860?k=20&m=896374860&s=612x612&w=0&h=Y2LR9GfsLDYCGN7GTt09RFhJv6sR37AMkFAeDhJYZVc=">
  </div>
  <div class="col-md-6 p-5">
    <h3 style="color: #b00808;">About Us</h3>
    <br/>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
  </div>
</div>
<h3 class="text-center featured">Featured Property</h3>
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
<SliderSlider/>
</div>
</template>

<script>
import axios from "axios";
import navbar from "../components/navbar.vue";
import SliderSlider from "../components/SlickSlider.vue";
export default {
  name: "HomeView",
  components: {
  navbar,
  SliderSlider,
  },
  data() {
    return {
      selectedSong: null,
      search: "",
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
            "https://res.cloudinary.com/dtlkiv19d/image/upload/v1659173865/Kallery/pamoja/h4_cwxl8c.jpg",
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
            "https://res.cloudinary.com/dtlkiv19d/image/upload/v1659173862/Kallery/pamoja/h12_venkz0.jpg",
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
            "https://res.cloudinary.com/dtlkiv19d/image/upload/v1659173862/Kallery/pamoja/h16_puvmwh.jpg",
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
            "https://res.cloudinary.com/dtlkiv19d/image/upload/v1659173861/Kallery/pamoja/h8_rkku3y.jpg",
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
            "https://res.cloudinary.com/dtlkiv19d/image/upload/v1659173837/Kallery/pamoja/h6_hmekyn.jpg",
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
            "https://res.cloudinary.com/dtlkiv19d/image/upload/v1659173837/Kallery/pamoja/h11_o1bnij.jpg",
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
            "https://res.cloudinary.com/dtlkiv19d/image/upload/v1659173835/Kallery/pamoja/h13_zq2jx8.jpg",
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
            "https://res.cloudinary.com/dtlkiv19d/image/upload/v1659173818/Kallery/pamoja/h1_d5tv0u.jpg",
        },
                {
          id: 9,
          code: "PL009",
          name: "Hostels for Makerere",
          amount:  "89,000,000",
          bedrooms:"3",
          land: "4 hecters",
          location: "Mukono Seeta",
          category: "Mortgage",
          photo:
            "https://res.cloudinary.com/dtlkiv19d/image/upload/v1659173807/Kallery/pamoja/h7_gmm3q4.jpg",
        },
        {
          id: 10,
          code: "PL010",
          name: "Appartments in Bugologbi",
          amount:  "109,000,000",
          bedrooms:"3",
          land: "4 hecters",
          location: "Kampala Bugolobi",
          category: "Mortgage",
          photo:
            "https://res.cloudinary.com/dtlkiv19d/image/upload/v1659173803/Kallery/pamoja/h14_e0eins.jpg",
        },
        {
          id: 11,
          code: "PL011",
          name: "Well Established bar",
          amount:  "60,000,000",
          bedrooms:"4",
          land: "4 hecters",
          location: "Mukono Seeta",
          category: "Sell",
          photo:
            "https://res.cloudinary.com/dtlkiv19d/image/upload/v1659173803/Kallery/pamoja/h14_e0eins.jpg",
        },
        {
          id: 12,
          code: "PL012",
          name: "Land and Farm",
          amount:  "89,000,000",
          bedrooms:"3",
          land: "4 hecters",
          location: "Luweero",
          category: "Mortgage",
          photo:
            "https://res.cloudinary.com/dtlkiv19d/image/upload/v1659173803/Kallery/pamoja/h14_e0eins.jpg",
        },
      ],

      paymentData: {
        tx_ref: this.generateReference(),
        amount: 1000,
        currency: "UGX",
        public_key: "FLWPUBK_TEST-8c1f4d871cb37a96bb33191bbcb6cdcb-X",
        payment_options: "mobilemoney",
        redirect_url: "",
        meta: {
          counsumer_id: "7898",
          consumer_mac: "kjs9s8ss7dd",
        },
        customer: {
          name: "Customer  Name",
          email: "customer@mail.com",
          phone_number: "081845***044",
        },
        customizations: {
          title: "Seventeen Music Ug",
          description: "Pay Using mobile money and download",
          logo: "https://res.cloudinary.com/dtlkiv19d/image/upload/v1656922199/Kallery/seventeenmusic/back2_vpstxs.png",
        },
        callback: this.makePaymentCallback,
        onclose: this.closedPaymentModal,
      },
    };
  },
  computed: {
    filteredSong() {
      return this.songs.filter((song) =>
        song.name.toLowerCase().includes(this.search.toLowerCase())
      );
    },
  },
  methods: {
    payViaService(song) {
      this.payWithFlutterwave(this.paymentData);
      console.log('Song Id',song)
      this.selectedSong = song
    },
    makePaymentCallback(response) {
      console.log("Pay", response);
      const song = this.selectedSong
       axios({
        url: song.audioMusic,
        method: "GET",
        responseType: "blob",
      }).then((response) => {
        var fileURL = window.URL.createObjectURL(new Blob([response.data]));
        var fileLink = document.createElement("a");

        fileLink.href = fileURL;
        fileLink.setAttribute("download", `${song.name}.mp3`);
        document.body.appendChild(fileLink);

        fileLink.click();
      });
    },
    closedPaymentModal() {
      console.log("payment is closed");
    },
    generateReference() {
      let date = new Date();
      return date.getTime().toString();
    },
    downloadSong() {
      console.log("download starting here");
      // axios({
      //   url: "https://res.cloudinary.com/dtlkiv19d/video/upload/v1656665568/Kallery/seventeenmusic/m1_cyotkp.mp3",
      //   method: "GET",
      //   responseType: "blob",
      // }).then((response) => {
      //   var fileURL = window.URL.createObjectURL(new Blob([response.data]));
      //   var fileLink = document.createElement("a");

      //   fileLink.href = fileURL;
      //   fileLink.setAttribute("download", "file.mp3");
      //   document.body.appendChild(fileLink);

      //   fileLink.click();
      // });
    },
  },
};
</script>
<style>
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
  height: 80vh; background-color: rgba(0, 0, 0, 0.5); margin-top: -448px; padding-top: 8%;
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
@media only screen and (max-width: 600px) {
.banner-title{
  font-size: 17px;
}
#card{
  width: 140%;
  margin-left: -50px;
}
.featured{
  margin-top: 3vh;
}
.banner-slide{
  margin-top: -200px;
}
.overlay{
  height: 25vh;
  margin-top: -380px;
}
.search{
  width: 70%; padding-left: 10px;
}
.banner-sub-title{
  display: none;
}
}

</style>
