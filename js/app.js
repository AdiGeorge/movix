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
  window.onclick = function(event2) {
    if (event2.target == modal2) {
     modal2.style.display = "none";
    }
  }

  ////Middle movie modal --3--
// Get the modal
var modal3 = document.getElementById("myModal3");

// Get the button that opens the modal
var btn3 = document.querySelector(".myBtn3");

// Get the <span> element that closes the modal
var span3 = document.getElementsByClassName("close3")[0];

// When the user clicks the button, open the modal 
btn3.onclick = function () {
  modal3.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span3.onclick = function () {
  modal3.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event3) {
    if (event3.target == modal3) {
     modal3.style.display = "none";
    }
  }

   ////Middle movie modal --4--
// Get the modal
var modal4 = document.getElementById("myModal4");

// Get the button that opens the modal
var btn4 = document.querySelector(".myBtn4");

// Get the <span> element that closes the modal
var span4 = document.getElementsByClassName("close4")[0];

// When the user clicks the button, open the modal 
btn4.onclick = function () {
  modal4.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span4.onclick = function () {
  modal4.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event4) {
    if (event4.target == modal4) {
     modal4.style.display = "none";
    }
  }

    ////Middle movie modal --5--
// Get the modal
var modal5 = document.getElementById("myModal5");

// Get the button that opens the modal
var btn5 = document.querySelector(".myBtn5");

// Get the <span> element that closes the modal
var span5 = document.getElementsByClassName("close5")[0];

// When the user clicks the button, open the modal 
btn5.onclick = function () {
  modal5.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span5.onclick = function () {
  modal5.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event5) {
    if (event5.target == modal5) {
     modal5.style.display = "none";
    }
  }


    ////Middle movie modal --6--
// Get the modal
var modal6 = document.getElementById("myModal6");

// Get the button that opens the modal
var btn6 = document.querySelector(".myBtn6");

// Get the <span> element that closes the modal
var span6 = document.getElementsByClassName("close6")[0];

// When the user clicks the button, open the modal 
btn6.onclick = function () {
  modal6.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span6.onclick = function () {
  modal6.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event6) {
    if (event6.target == modal6) {
     modal6.style.display = "none";
    }
  }



    ////Middle movie modal --7--
// Get the modal
var modal7 = document.getElementById("myModal7");

// Get the button that opens the modal
var btn7 = document.querySelector(".myBtn7");

// Get the <span> element that closes the modal
var span7 = document.getElementsByClassName("close7")[0];

// When the user clicks the button, open the modal 
btn7.onclick = function () {
  modal7.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span7.onclick = function () {
  modal7.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event7) {
    if (event7.target == modal7) {
     modal7.style.display = "none";
    }
  }


    ////Middle movie modal --8--
// Get the modal
var modal8 = document.getElementById("myModal8");

// Get the button that opens the modal
var btn8 = document.querySelector(".myBtn8");

// Get the <span> element that closes the modal
var span8 = document.getElementsByClassName("close8")[0];

// When the user clicks the button, open the modal 
btn8.onclick = function () {
  modal8.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span8.onclick = function () {
  modal8.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event8) {
    if (event8.target == modal8) {
     modal8.style.display = "none";
    }
  }



    ////Middle movie modal --9--
// Get the modal
var modal9 = document.getElementById("myModal9");

// Get the button that opens the modal
var btn9 = document.querySelector(".myBtn9");

// Get the <span> element that closes the modal
var span9 = document.getElementsByClassName("close9")[0];

// When the user clicks the button, open the modal 
btn9.onclick = function () {
  modal9.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span9.onclick = function () {
  modal9.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event9) {
    if (event9.target == modal9) {
     modal9.style.display = "none";
    }
  }

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

///MODAL Friends 3
var modalFriends = document.getElementById("myModalFriends");

// Get the button that opens the modal
var btnFriends = document.querySelector(".friends3");

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


///MODAL Friends 4
var modalFriends = document.getElementById("myModalFriends");

// Get the button that opens the modal
var btnFriends = document.querySelector(".friends4");

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



///MODAL Friends 5
var modalFriends = document.getElementById("myModalFriends");

// Get the button that opens the modal
var btnFriends = document.querySelector(".friends5");

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


///MODAL Friends 6
var modalFriends = document.getElementById("myModalFriends");

// Get the button that opens the modal
var btnFriends = document.querySelector(".friends6");

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



///MODAL Friends 7
var modalFriends = document.getElementById("myModalFriends");

// Get the button that opens the modal
var btnFriends = document.querySelector(".friends7");

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


///MODAL Friends 8
var modalFriends = document.getElementById("myModalFriends");

// Get the button that opens the modal
var btnFriends = document.querySelector(".friends8");

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


///MODAL Friends 9
var modalFriends = document.getElementById("myModalFriends");

// Get the button that opens the modal
var btnFriends = document.querySelector(".friends9");

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
  }, 1000);

}


function buildAnimation() {
  for (var i = 0; i < 2; i++) {
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