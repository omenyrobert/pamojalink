<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-white">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <a class="navbar-brand" style="padding: 5px; margin-left: 50px; border-radius: 15px; background-color: rgba(176, 8, 8, 0.5);" href="#"><img style="width: 100px;" src="https://res.cloudinary.com/dtlkiv19d/image/upload/v1659267147/Kallery/pamoja/PAMOJALOGO_dtqv2n.png"></a>
    <div class="collapse navbar-collapse row" id="navbarTogglerDemo03">
       <div class="col-md-6" style="padding-left: 8%;">
     <a style="color: #000; text-decoration: none; margin-right: 20px;" href="tel:+256 776 141212"><i class="bi bi-telephone"></i> +256 776 141212</a> <i class="bi bi-geo-alt"></i>Martin Road, Solomon’s Mall
     </div>
      <div class="col-md-6">
     <ul class="navbar-nav" style="margin-left: 5%;">
        <li class="nav-item">
          <a class="nav-link">Sell</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#">About Us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contact</a>
        </li>
          <li class="nav-item">
          <a class="nav-link" href="#">Houses</a>
        </li>
          <li class="nav-item">
          <a class="nav-link" href="#">Land</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Rentals</a>
        </li>
          <li class="nav-item">
          <a class="nav-link" href="#">Mortgages</a>
        </li>
      </ul>
      </div>
    </div>
  </div>
</nav>
</template>
<script>

export default {
    name: 'navbar',
}
</script>
<style scoped>
.navbar-nav .nav-item .nav-link.active {
color: #b00808;
border-bottom: 3px #b00808 solid;
}
.navbar-nav .nav-item .nav-link:hover {
color: #b00808;
border-bottom: 3px #b00808 solid;
}
</style>