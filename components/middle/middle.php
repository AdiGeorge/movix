<div id="middle">
    <header>
        <nav>
            <input class="search" type="text" placeholder="Search">
            <div class="profile-header">
                <img class="avatar" src="images/avatar.png" alt="profile img">
                <a href="/profile" onclick="showPage('profile'); return false;">
                    <p class="profile-name">Name</p>
                </a>
            </div>
            <img class="arrow-profile dropbtn" src="images/arrow.png" alt="arrow">
            <div id="dropdown-header" class="dropdown-content">
                <a href="/profile" onclick="showPage('profile'); return false;">Profile</a>
                <a href="">Logout</a>
            </div>

        </nav>
    </header>
    <main class="container">
        <div id="home" class="subpage">
            
            <div class="header-video">
            <!-- <div id="animation">Text</div> -->
                <video id="movieDisplay" src="images/trailer.mp4" autoplay loop muted></video>
                <div class="video-text">
                    <h2 id="movieName">Queen's Gambit</h2>
                    <button>Start Watching</button>
                </div>
                
            </div>
       
                <div>
                    <h3>Drama Movies</h3><br>
                    <p>Popular now</p>
                    <div class="swiper-container">
                        <div class="swiper-wrapper">
                            <img class="swiper-slide myBtn" src="images/movie1.png" alt="movie1">
                            <img class="swiper-slide myBtn2" src="images/movie2.png" alt="movie2">
                            <img class="swiper-slide myBtn3" src="images/movie3.png" alt="movie3">
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
            <?php require_once('profile.html') ?>
        </div>
    </main>




</div>

</div>

<div class="dropdown">
    <button id="myBtn" class="dropbtn">Dropdown</button>
    <div id="myDropdown" class="dropdown-content">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
    </div>
</div>