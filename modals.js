// Get the modal
var modal = document.getElementById("logoutModal");
var navbar = document.getElementById("nav-toggle");

// Get the button that opens the modal
var btn = document.getElementById("logoutModalTrigger");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
  if (!navbar.checked) {
    if (!navbar.checked) {
      navbar.checked = !navbar.checked;
      return;
    }
  } else if (navbar.checked && document.documentElement.clientWidth <= 981) {
    navbar.checked = !navbar.checked;
  }
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// Get the modal
var formModal = document.getElementById("formModal");

// Get the button that opens the modal
var formbtn = document.getElementById("formModalTrigger");

// Get the <span> element that closes the modal
var formspan = document.getElementsByClassName("close2")[0];

// When the user clicks on the button, open the modal
formbtn.onclick = function () {
  formModal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
formspan.onclick = function () {
  formModal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == formModal) {
    formModal.style.display = "none";
  }
};
