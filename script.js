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