// 'use strict'

// import Swiper from 'swiper';
// // import Swiper styles
// import 'swiper/swiper-bundle.css';

// const swiper = new Swiper(...);
function showPage(pageId) {
  document.querySelectorAll('.subpage').forEach(item => {
    item.style.display = "none"
  })
  document.getElementById(pageId).style.display = "block"
}

function showPageProfile(pageId) {
  document.querySelectorAll('.subpage-profile').forEach(item => {
    item.style.display = "none"
  })
  document.getElementById(pageId).style.display = "block"
}



function closeChat() {
  var chat = document.querySelector(".chat-container");
  var film = document.querySelector("#film-container");
  var chatcontainer = document.querySelector("#chat");
  var nav = document.querySelector(".logo-chat");
  console.log(nav)
  if (chat.style.display == "grid") {
    chat.style.display = "none"
    film.style.minWidth = "100%"
    chatcontainer.style.width = "0"
    nav.style.width = "100%"
  } else {
    chat.style.display = "grid"
    film.style.minWidth = "80%"
    chatcontainer.style.width = "18%";
    nav.style.width = "82%"

  }
}



var acc = document.getElementsByClassName("categ-title-arrow");

for (var i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

////Middle movie modal
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.querySelector(".myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function () {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

////Middle movie modal --2--
// Get the modal
var modal2 = document.getElementById("myModal2");

// Get the button that opens the modal
var btn2 = document.querySelector(".myBtn2");

// Get the <span> element that closes the modal
var span2 = document.getElementsByClassName("close2")[0];

// When the user clicks the button, open the modal 
btn2.onclick = function () {
  modal2.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span2.onclick = function () {
  modal2.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event2) {
//   if (event2.target == modal2) {
//     modal2.style.display = "none";
//   }
// }


///MODAL Friends 1
var modalFriends = document.getElementById("myModalFriends");

// Get the button that opens the modal
var btnFriends = document.querySelector(".friends");

// Get the <span> element that closes the modal
var spanFriends = document.getElementsByClassName("close-friends")[0];

// When the user clicks the button, open the modal 
btnFriends.onclick = function () {
  modalFriends.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanFriends.onclick = function () {
  modalFriends.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
// window.onclick = function(eventFriends) {
//   if (eventFriends.target == modalFriends) {
//     modalFriends.style.display = "none";
//   }
// }

///MODAL Friends 2
var modalFriends = document.getElementById("myModalFriends");

// Get the button that opens the modal
var btnFriends = document.querySelector(".friends2");

// Get the <span> element that closes the modal
var spanFriends = document.getElementsByClassName("close-friends")[0];

// When the user clicks the button, open the modal 
btnFriends.onclick = function () {
  modalFriends.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanFriends.onclick = function () {
  modalFriends.style.display = "none";
}



// Get the button, and when the user clicks on it, execute myFunction
document.querySelector(".arrow-profile").onclick = function() {dropdown()};
document.querySelector(".categ-dropdown-arrow").onclick = function() {dropdown()};

/* myFunction toggles between adding and removing the show class, which is used to hide and show the dropdown content */
function dropdown() {
    document.getElementById("dropdown-header").classList.toggle("show");
    document.querySelector(".categ-dropdown-arrow").classList.toggle("show");
    
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {

  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");

    for (let i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

var movies = [{
    movieName: 'The Dragon Official',
    moviePath: '/movix/video/movie1Dragon.mp4',
    movieIMG: "/img"
  },
  {
    movieName: 'The Foreigner',
    moviePath: '/movix/video/movie2Foreigner.mp4',
    movieIMG: "/img"
  },
  {
    movieName: 'The Queen’s Gambit',
    moviePath: '/movix/video/movie3Queen.mp4',
    movieIMG: "/img"
  },
  {
    movieName: 'Noelle Official',
    moviePath: '/movix/video/movie4Noelle.mp4',
    movieIMG: "/img"
  },
  {
    movieName: 'Joker Official',
    moviePath: '/movix/video/movie5Joker.mp4',
    movieIMG: "/img"
  },
  {
    movieName: 'Gemini Official',
    moviePath: '/movix/video/movie6Gemini.mp4',
    movieIMG: "/img"
  },
  {
    movieName: 'Last Christmas',
    moviePath: '/movix/video/movie7LChristmas.mp4',
    movieIMG: "/img"
  },
  {
    movieName: 'Avengers Official',
    moviePath: '/movix/video/movie8Avengers.mp4',
    movieIMG: "/img"
  }

];


function newMovie() {
  buildAnimation();
  setTimeout(function () {
    var count = Object.keys(movies).length;
    var randomMovie = Math.floor(Math.random() * (count));
    var movie = document.getElementById('movieDisplay');
    movie.src = movies[randomMovie].moviePath;
    movie.load();
    document.getElementById('movieName').innerHTML = movies[randomMovie].movieName;
  }, 3000);

}


function buildAnimation() {
  for (var i = 0; i < 6; i++) {
    testLoop(i);
  }

}

function testLoop(i) {
  var change = document.getElementById('movieDisplay');
  setTimeout(function () {
    var count = Object.keys(movies).length;
    var randomMovie = Math.floor(Math.random() * (count));
    var movie = document.getElementById('movieDisplay');
    movie.src = movies[randomMovie].moviePath;
    movie.load();
    document.getElementById('movieName').innerHTML = movies[randomMovie].movieName;

    change.className = "random-element";
    change.style.animation = 'none';
    change.offsetHeight; /* trigger reflow */
    change.style.animation = null;
  }, 500 * i);
}

function openCateg(){
  document.querySelector('.titles-mobile').style.display="block"
  console.log('x');
}

function showChat() {
  var chat = document.querySelector(".chat-container");
  var chat = document.querySelector(".chat-container");
  var film = document.querySelector("#film-container");
  var chatcontainer = document.querySelector("#chat");
  var nav =  document.querySelector(".logo-chat");
  chat.style.display = "grid"
  film.style.minWidth = "80%"
  chatcontainer.style.width="18%";
  nav.style.width="82%"
  chat.style.display="grid"
}