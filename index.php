<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Movix</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>
    <!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"> -->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet">
    <!-- Windows path -> <link rel="stylesheet" href="./css/app.css"> -->
    <!-- Mac path -> <link rel="stylesheet" href="/movix/css/app.css"> -->
    <link rel="stylesheet" href="./css/app.css">
</head>
<body>
  

  <?php require_once(__DIR__.'/components/left/left-main.html') ?>
  <?php require_once(__DIR__.'/components/middle/middle.php') ?>
  <?php require_once(__DIR__.'/components/right/right.html') ?> 

    
  <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>
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
     <script src="./js/app.js"></script>
     <!-- Windows path -> <script src="./js/app.js"></script> -->
     <!-- Mac path -> <script src="/js/app.js"></script> -->
     
</body>
</html>