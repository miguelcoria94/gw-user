// Get the modal
var detailmodal = document.getElementById("detailModal");
var navbar = document.getElementById("nav-toggle");

// Get the button that opens the modal
var detailbtn = document.getElementById("detailsModalTrigger");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
detailbtn.onclick = function () {
  detailmodal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  detailmodal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == detailmodal) {
    detailmodal.style.display = "none";
  }
};
