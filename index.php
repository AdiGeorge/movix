<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Movix</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="./css/app.css">
    
</head>
<body>
  

  <?php require_once(__DIR__.'/components/left/left-main.html') ?>
  <?php require_once(__DIR__.'/components/middle/middle.php') ?>
  <?php require_once(__DIR__.'/components/right/right.html') ?> 

    
  
  <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>
  <script src="swiper.min.js"></script>
  <script>
    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 3,
      spaceBetween: 0,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
    </script>
    <script src="app.js"></script>
</body>
</html>