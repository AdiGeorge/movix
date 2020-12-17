<div id="moviePage">
  <nav class="logo-chat">
    <a href="index.php">
      <img class="logo" src="./images/logo.png" alt="">
    </a>
  </nav>
  <div id="film">
    <video autoplay muted controls loop id="film-container">
      <source src="./images/trailer.mp4" type="video/mp4">
      Your browser does not support HTML5 video.
    </video>
    <img class="chat-icon" onclick="showChat(); return false" src="./images/chat-icon.png" alt="">
    <!-- <button id="pause" onclick="pauseFilm()"><img src="./images/pause.svg" alt="pause"></button>
        <button id="play" onclick="pauseFilm()"><img src="./images/play.png" alt="pause"></button> -->
  </div>

  <div id="chat">
    <?php require_once(__DIR__.'./chat.html') ?>
  </div>
</div>


<script>
  var video = document.getElementById("film-container");
  var pause = document.getElementById("pause");
  var play = document.getElementById("play");

  function pauseFilm() {
    if (video.paused) {
      video.play();
      pause.style.display = "block"
      play.style.display = "none"
    } else {
      video.pause();
      pause.style.display = "none"
      play.style.display = "block"
    }
  }
</script>