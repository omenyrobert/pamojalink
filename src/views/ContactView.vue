<template>
<div>
<navbar/>

 <div style="width: 100%; height: 80vh; background-size: 100%; background-position: center; background-repeat: no-repeat; background-image: url('https://res.cloudinary.com/dtlkiv19d/image/upload/v1659273740/Kallery/pamoja/pl1-min_ziesl2.jpg');">
<br/>
<br/>

<div class="p-5" style="background-color: rgba(0, 0, 0, 0.8); width: 400px;">
<h1 class="text-white">Contact Us</h1>
</div>
 </div>
 <br/>
 <h3>Contact Us</h3>
 
 <div class="row m-5">
    <div class="col-md-6">
 <img style="width: 100%;" src="https://media.istockphoto.com/photos/excited-black-guy-with-computer-shaking-fists-over-gray-wall-picture-id1322879265?k=20&m=1322879265&s=612x612&w=0&h=EzYRmXcYXLS-D72Bdmm7A-mH8bj3giw3t0fXyZ6o4y4=">
    </div>
       <div class="col-md-6" style="text-align: left;">
        <label>Full Name</label>
        <input type="text" placeholder="Full Name" class="form-control mt-2">
        <br/>
         <label>Email</label>
        <input type="email" placeholder="Email" class="form-control mt-2">
        <br/>
         <label>Message</label>
         <textarea class="form-control mt-2" >
            message here
         </textarea>
         <br/>
        <button class="btn btn-default" style="background-color: #b00808; width: 100%; color: #fff;">Send</button>
    </div>

 </div>
  

<Compfooter/>
</div>
</template>

<script>
import Compfooter from '../components/Compfooter.vue'
import navbar from '../components/navbar.vue'
export default {
    name:'ContactView',
  components: { navbar, Compfooter },

}
</script>

