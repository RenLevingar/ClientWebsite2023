// Get the modal
var modal1 = document.getElementById('id01');

// Get the modal
var modal2 = document.getElementById('id02');

// Get the modal
var modal3 = document.getElementById('id03');

// Get the modal
var modal4 = document.getElementById('id04');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
   switch (event.target) {
      case modal1:
         modal1.style.display = "none";
         break;
      case modal2:
         modal2.style.display = "none";
         break;
      case modal3:
         modal3.style.display = "none";
         break;
      case modal4:
         modal4.style.display = "none";
         break;
      default:
         break;
   }
}

let firstTimeoutID;
let secondTimeoutID;

function makeItAnX() {
    document.getElementById("hamburger").classList.add("open");
    document.getElementById("hamburger").addEventListener("click", makeItAY);
    document.getElementById("hamburger").removeEventListener("click", makeItAnX);
    clearTimeout(secondTimeoutID);
    document.getElementById("headerBTNS").style.display = "block";
    firstTimeoutID = setTimeout(() => {document.getElementById("headerBTNS").style.marginLeft = "0px";}, 0);
}

function makeItAY() {
    document.getElementById("hamburger").classList.remove("open");
    document.getElementById("hamburger").addEventListener("click", makeItAnX);
    document.getElementById("hamburger").removeEventListener("click", makeItAY);
    clearTimeout(firstTimeoutID);
    document.getElementById("headerBTNS").style.marginLeft = "100%";
    secondTimeoutID = setTimeout(() => {document.getElementById("headerBTNS").style.display = "none";}, 1000);
}