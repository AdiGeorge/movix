<div id="middle">
    <header>
        <nav>
            <a href="/home" onclick="showPage('home'); return false;"><img class="logo" src="./images/logo.png" alt="logo"></a>
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
            <div class="categories-mobile">
                <div class="movies-mobile-categ">
                    <h5>Movies</h5>
                    <img class="categ-dropdown-arrow" onclick="openCateg(); return false" src="images/arrow.png" alt="arrow">
                    <div class="categories-mobile-dropdown">
                        <ul  class="titles-mobile">
                            <li>Drama</li>
                            <li>Action</li>
                            <li>Comedy</li>
                            <li>Thriller</li>
                            <li>Horror</li>
                            <li>Science Fiction</li>
                            <li>Classics</li>
                        </ul>
                    </div>
                </div>
                <div class="movies-mobile-categ">
                    <h5>Documentaries</h5>
                    <img class="arrow-profile" src="images/arrow.png" alt="arrow">
                    <div class="categories-mobile-dropdown">
                        <ul  class="titles-mobile">
                            <li>Drama</li>
                            <li>Action</li>
                            <li>Comedy</li>
                            <li>Thriller</li>
                            <li>Horror</li>
                            <li>Science Fiction</li>
                            <li>Classics</li>
                        </ul>
                    </div>
                </div>
                <div class="movies-mobile-categ">
                    <h5>Series</h5>
                    <img class="arrow-profile" src="images/arrow.png" alt="arrow">
                    <div class="categories-mobile-dropdown">
                        <ul  class="titles-mobile">
                            <li>Drama</li>
                            <li>Action</li>
                            <li>Comedy</li>
                            <li>Thriller</li>
                            <li>Horror</li>
                            <li>Science Fiction</li>
                            <li>Classics</li>
                        </ul>
                    </div>
                </div>
            </div>
                <div class="movies-container">
                    <h3 class="genre-title">Drama Movies</h3>
                    <p class="genre-subcateg">Popular now</p>
                    <div class="swiper-container">
                        <div class="swiper-wrapper">
                            <img class="swiper-slide myBtn" src="images/movie1.png" alt="movie1">
                            <img class="swiper-slide myBtn2" src="images/movie2.png" alt="movie2">
                            <img class="swiper-slide myBtn3" src="images/movie3.png" alt="movie3">
                            <img class="swiper-slide myBtn4" src="images/movie4.png" alt="movie1">
                            <img class="swiper-slide myBtn5" src="images/movie5.png" alt="movie2">
                            <img class="swiper-slide myBtn6" src="images/movie6.png" alt="movie3">
                            <img class="swiper-slide myBtn7" src="images/movie7.png" alt="movie1">
                            <img class="swiper-slide myBtn8" src="images/movie8.png" alt="movie2">
                            <img class="swiper-slide myBtn9" src="images/movie9.png" alt="movie3">
                        </div>
                   
                    <!-- Add Pagination -->
                    <div class="swiper-pagination"></div>
                    <!-- Add Arrows -->
                    <div class="swiper-button-next"></div>
                    <div class="swiper-button-prev"></div>
                </div>
            </div>

            <div>
                <p class="genre-subcateg">Viewed by friends</p>
                <div class="swiper-container">
                    <div class="swiper-wrapper">
                        <img class="swiper-slide" src="images/movie9.png" alt="movie1">
                        <img class="swiper-slide" src="images/movie5.png" alt="movie2">
                        <img class="swiper-slide" src="images/movie7.png" alt="movie3">
                        <img class="swiper-slide" src="images/movie6.png" alt="movie1">
                        <img class="swiper-slide" src="images/movie2.png" alt="movie2">
                        <img class="swiper-slide" src="images/movie3.png" alt="movie3">
                        <img class="swiper-slide" src="images/movie1.png" alt="movie1">
                        <img class="swiper-slide" src="images/movie8.png" alt="movie2">
                        <img class="swiper-slide" src="images/movie4.png" alt="movie3">
                    </div>
                    <!-- Add Pagination -->
                   <!-- Add Pagination -->
                   <div class="swiper-pagination"></div>
                    <!-- Add Arrows -->
                    <div class="swiper-button-next"></div>
                    <div class="swiper-button-prev"></div>
                </div>
            </div>

            <div>
                <p class="genre-subcateg">Recently released</p>
                <div class="swiper-container">
                    <div class="swiper-wrapper">
                        <img class="swiper-slide" src="images/movie8.png" alt="movie1">
                        <img class="swiper-slide" src="images/movie6.png" alt="movie2">
                        <img class="swiper-slide" src="images/movie4.png" alt="movie3">
                        <img class="swiper-slide" src="images/movie3.png" alt="movie1">
                        <img class="swiper-slide" src="images/movie9.png" alt="movie2">
                        <img class="swiper-slide" src="images/movie5.png" alt="movie3">
                        <img class="swiper-slide" src="images/movie1.png" alt="movie1">
                        <img class="swiper-slide" src="images/movie2.png" alt="movie2">
                        <img class="swiper-slide" src="images/movie7.png" alt="movie3">
                    </div>
                    <!-- Add Pagination -->
                    <!-- Add Pagination -->
                    <div class="swiper-pagination"></div>
                    <!-- Add Arrows -->
                    <div class="swiper-button-next"></div>
                    <div class="swiper-button-prev"></div>
                </div>
            </div>
            <button class="see-more-btn">See more</button>

            <div class="random-mobile">
                <button class="random-btn"><i class="fa fa-random random-icon"></i></button>
                <p>RANDOM MOVIE</p>
            </div>

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


