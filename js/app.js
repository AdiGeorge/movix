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



/////////REGISTER MODAL /////////

// Get the modal
var modalRegister = document.getElementById("myModalRegister");

// Get the button that opens the modal
var btnRegister = document.querySelector(".myBtnRegister");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closeRegister")[0];

// When the user clicks the button, open the modal 
btnRegister.onclick = function() {
    modalRegister.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modalRegister.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(eventRegister) {
  if (eventRegister.target == modalRegister) {
    modalRegister.style.display = "none";
  }
}

