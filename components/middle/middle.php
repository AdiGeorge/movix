
    <div id="middle">
        <header>
            <nav>
                <input class="search" type="text" placeholder="Search">
                <div class="profile-header">
                    <img class="avatar" src="images/avatar.png" alt="profile img">
                    <a href="/profile" onclick="showPage('profile'); return false;">
                        <p class="profile-name">Name</p>
                    </a>
                    <img class="arrow-profile" src="images/arrow.png" alt="arrow">
                </div>

            </nav>
        </header>
        <main class="container">
            <div id="home" class="subpage">
                <div class="header-video">
                    <video src="images/trailer.mp4" autoplay muted></video>
                    <div class="video-text">
                        <h2>Queen's Gambit</h2>
                        <button>Start Watching</button>
                    </div>
                </div>
                <div>
                    <h3>Drama Movies</h3><br>
                    <p>Popular now</p>
                    <div class="swiper-container">
                        <div class="swiper-wrapper">
                            <img class="myBtn" class="swiper-slide" src="images/movie1.png" alt="movie1">
                            <img class="swiper-slide" src="images/movie2.png" alt="movie2">
                            <img class="swiper-slide" src="images/movie3.png" alt="movie3">
                            <img class="swiper-slide" src="images/movie1.png" alt="movie1">
                            <img class="swiper-slide" src="images/movie2.png" alt="movie2">
                            <img class="swiper-slide" src="images/movie3.png" alt="movie3">
                            <img class="swiper-slide" src="images/movie1.png" alt="movie1">
                            <img class="swiper-slide" src="images/movie2.png" alt="movie2">
                            <img class="swiper-slide" src="images/movie3.png" alt="movie3">
                        </div>

                        <!-- Add Pagination -->
                        <div class="swiper-pagination"></div>
                        <!-- Add Arrows -->
                        <div class="swiper-button-next"></div>
                        <div class="swiper-button-prev"></div>
                    </div>
                </div>

                <div>
                    <p>Viewed by friends</p>
                    <div class="swiper-container">
                        <div class="swiper-wrapper">
                            <img class="swiper-slide" src="images/movie1.png" alt="movie1">
                            <img class="swiper-slide" src="images/movie2.png" alt="movie2">
                            <img class="swiper-slide" src="images/movie3.png" alt="movie3">
                            <img class="swiper-slide" src="images/movie1.png" alt="movie1">
                            <img class="swiper-slide" src="images/movie2.png" alt="movie2">
                            <img class="swiper-slide" src="images/movie3.png" alt="movie3">
                            <img class="swiper-slide" src="images/movie1.png" alt="movie1">
                            <img class="swiper-slide" src="images/movie2.png" alt="movie2">
                            <img class="swiper-slide" src="images/movie3.png" alt="movie3">
                        </div>
                        <!-- Add Pagination -->
                        <div class="swiper-pagination"></div>
                    </div>
                </div>

                <div>
                    <p>Recently released</p>
                    <div class="swiper-container">
                        <div class="swiper-wrapper">
                            <img class="swiper-slide" src="images/movie1.png" alt="movie1">
                            <img class="swiper-slide" src="images/movie2.png" alt="movie2">
                            <img class="swiper-slide" src="images/movie3.png" alt="movie3">
                            <img class="swiper-slide" src="images/movie1.png" alt="movie1">
                            <img class="swiper-slide" src="images/movie2.png" alt="movie2">
                            <img class="swiper-slide" src="images/movie3.png" alt="movie3">
                            <img class="swiper-slide" src="images/movie1.png" alt="movie1">
                            <img class="swiper-slide" src="images/movie2.png" alt="movie2">
                            <img class="swiper-slide" src="images/movie3.png" alt="movie3">
                        </div>
                        <!-- Add Pagination -->
                        <div class="swiper-pagination"></div>
                    </div>
                </div>

                <button class="see-more-btn">See more</button>
                <!-- The Modal -->
                <?php // Windows -> require_once(__DIR__.'./modal.html') 
                require_once('modal.html')
                ?>

            </div>


            <div id="profile" class="subpage">
            <section class="header-profile">
                <img class="profile-avatar" src="images/profile.png" alt="profile img">
                <div class="profile-info">
                    <h1>Edgar Swift</h1>
                    <p><strong>Movies:</strong> 35 <strong>Series:</strong> 12</p>
                </div>
            </section>
            </div>
        </main>




    </div>

    </div>
<script>
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.querySelector(".myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
</script>