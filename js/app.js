// 'use strict'

// import Swiper from 'swiper';
// // import Swiper styles
// import 'swiper/swiper-bundle.css';

// const swiper = new Swiper(...);
function showPage(pageId){
  document.querySelectorAll('.subpage').forEach( item => {
      item.style.display = "none"
  })
  document.getElementById(pageId).style.display="block"
}

var acc = document.getElementsByClassName("categ-title-arrow");

for (var i=0; i<acc.length; i++) {
  acc[i].addEventListener("click", function() {
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

////Middle movie modal --2--
// Get the modal
var modal2 = document.getElementById("myModal2");

// Get the button that opens the modal
var btn2 = document.querySelector(".myBtn2");

// Get the <span> element that closes the modal
var span2 = document.getElementsByClassName("close2")[0];

// When the user clicks the button, open the modal 
btn2.onclick = function() {
  modal2.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span2.onclick = function() {
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
btnFriends.onclick = function() {
  modalFriends.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanFriends.onclick = function() {
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
btnFriends.onclick = function() {
  modalFriends.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanFriends.onclick = function() {
  modalFriends.style.display = "none";
}

