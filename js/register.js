/////////REGISTER MODAL /////////

// Get the modal
var modalRegister = document.getElementById("myModalRegister");

// Get the button that opens the modal
var btnRegister = document.getElementById("myBtnRegister");

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

function dashboard(){
    window.location.href = "/movix/index.php";
}