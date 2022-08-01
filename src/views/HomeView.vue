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
<h3 class="text-center featured" style="color: #b00808;">Featured Property</h3>
<div class="row mx-5">
<div class="col-lg-3 col-6 p-3" v-for="house in houses" :key="house.id">
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
<div class="row" style="background-color: #b00808;">
  <div class="col-md-3">
    <img style="width: 100%;" src="https://media.istockphoto.com/photos/excited-black-guy-with-computer-shaking-fists-over-gray-wall-picture-id1322879265?k=20&m=1322879265&s=612x612&w=0&h=EzYRmXcYXLS-D72Bdmm7A-mH8bj3giw3t0fXyZ6o4y4=">
  </div>
  <div class="col-md-3">
    <img style="width: 100%; margin-left: -50px;" src="https://media.istockphoto.com/photos/positive-african-american-lady-pointing-up-at-copy-space-picture-id1352854927?k=20&m=1352854927&s=612x612&w=0&h=E6yHxaP_BuFFvLUeeTii55qR4Yzmzp6sDnjges833ZY=">
  </div>
  <div class="col-md-6 p-5" style="background-color: #b00808;">
    <h3 class="text-white">Sell And Buy With Us Quickly & Easily</h3>
    <p class="text-white">Anywhere and any time you want to buy and sell with us, we shall be available to save the day</p>

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
