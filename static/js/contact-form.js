// Get the modal
var modal = document.getElementById("contact-form");

// Get the button that opens the modal
var btn = document.getElementById("contact-button");
var navLink = document.getElementById("contact-link");
var homeLink = document.getElementById("home-link");
var aboutLink = document.getElementById("about-link");
var homePage = document.getElementById("home");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

navLink.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
  aboutLink.click()

}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    aboutLink.click()
  }
}