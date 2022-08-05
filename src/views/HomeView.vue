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
<input class="search"   v-model="search" type="text" placeholder="Search Appartments, land, houses"><i class="bi bi-search p-3" style="background-color: #b00808; color: #fff;"></i>
  </div>
</div>
<div class="row mt-2" id="category-section">
  <div class="col-lg-3 col-6">
    <div class="categories">
      <i class="bi bi-building"></i>
      <p>Apartments</p>

    </div>
  </div>
  <div class="col-lg-3 col-6 ">
    <div class="categories">
      <i class="bi bi-house-door-fill"></i>
<p>Houses</p>
    </div>
  </div>
    <div class="col-lg-3 col-6 ">
      <div class="categories">
        <i class="bi bi-bricks"></i>
<p>Hostels</p>
      </div>
  </div>
    <div class="col-lg-3 col-6">
      <div class="categories">
        <i class="bi bi-shop"></i>
<p>Mortgages</p>
      </div>
  </div>
</div>

<h3 class="text-center featured" style="color: #b00808;">Featured Property</h3>
<div class="row mx-5">
<div class="col-md-3 p-3" v-for="house in filteredHouse" :key="house.id">
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
<div class="row" id="about-section">
  <div class="col-md-6">
    <img style="width: 100%;" src="https://media.istockphoto.com/photos/young-african-woman-relaxing-at-home-with-a-digital-tablet-picture-id896374860?k=20&m=896374860&s=612x612&w=0&h=Y2LR9GfsLDYCGN7GTt09RFhJv6sR37AMkFAeDhJYZVc=">
  </div>
  <div class="col-md-6 p-5">
    <h3 style="color: #b00808;">About Us</h3>
    <br/>
    <p style="text-align: left;">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
  </div>
</div>
<div class="row" style="background-color: #b00808;">
  <div class="col-md-7">
    <img style="width: 50%;" src="https://media.istockphoto.com/photos/excited-black-guy-with-computer-shaking-fists-over-gray-wall-picture-id1322879265?k=20&m=1322879265&s=612x612&w=0&h=EzYRmXcYXLS-D72Bdmm7A-mH8bj3giw3t0fXyZ6o4y4=">
   <img style="width: 50%;" src="https://media.istockphoto.com/photos/positive-african-american-lady-pointing-up-at-copy-space-picture-id1352854927?k=20&m=1352854927&s=612x612&w=0&h=E6yHxaP_BuFFvLUeeTii55qR4Yzmzp6sDnjges833ZY=">
  </div>
  <div class="col-md-5 p-5" style="background-color: #b00808;">
    <h3 class="text-white">Sell And Buy With Us Quickly & Easily</h3>
    <p class="text-white">Anywhere and any time you want to buy and sell with us, we shall be available to save the day</p>

  </div>
</div>
<latest-sales/>
<div class="my-5" style="background-size: cover; background-attachment: fixed; background-position: center; background-repeat: no-repeat; background-image: url('https://images.unsplash.com/photo-1494526585095-c41746248156?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'); height: 80vh;">
<br/><br/>
<h1 class="text-white">Our Partners</h1>
<div class="row container">
  <div class="col-md-3">
<img src="data:image/jpeg;base64,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">
  </div>
    <div class="col-md-3">
   <img src="data:image/jpeg;base64,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">
  </div>
    <div class="col-md-3">
   <img src="data:image/png;base64,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">
  </div>
</div>
</div>
<br/>
<SliderSlider/>
<br/>
<Compfooter/>
</div>
</template>

<script>
import axios from "axios";
import navbar from "../components/navbar.vue";
import SliderSlider from "../components/SlickSlider.vue";
import Compfooter from "../components/Compfooter.vue";
import LatestSales from '../components/latestSales.vue';
export default {
  name: "HomeView",
  components: {
  navbar,
  SliderSlider,
    LatestSales,
    Compfooter,
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
      ],

      // paymentData: {
      //   tx_ref: this.generateReference(),
      //   amount: 1000,
      //   currency: "UGX",
      //   public_key: "FLWPUBK_TEST-8c1f4d871cb37a96bb33191bbcb6cdcb-X",
      //   payment_options: "mobilemoney",
      //   redirect_url: "",
      //   meta: {
      //     counsumer_id: "7898",
      //     consumer_mac: "kjs9s8ss7dd",
      //   },
      //   customer: {
      //     name: "Customer  Name",
      //     email: "customer@mail.com",
      //     phone_number: "081845***044",
      //   },
      //   customizations: {
      //     title: "Seventeen Music Ug",
      //     description: "Pay Using mobile money and download",
      //     logo: "https://res.cloudinary.com/dtlkiv19d/image/upload/v1656922199/Kallery/seventeenmusic/back2_vpstxs.png",
      //   },
      //   callback: this.makePaymentCallback,
      //   onclose: this.closedPaymentModal,
      // },
    };
  },
  computed: {
    filteredHouse() {
      return this.houses.filter((house) =>
        house.name.toLowerCase().includes(this.search.toLowerCase())
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
<style scoped>
#category-section{
  margin-left: 100px;
  margin-right: 100px;
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
