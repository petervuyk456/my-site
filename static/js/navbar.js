// When the user scrolls the page, execute myFunction
window.onscroll = function() {stickyNav()};

// Get the navbar
var navbar = document.getElementsByClassName("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyNav() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
    d3.selectAll("div.section-title").node().classList.add("hide")
  } else {
    navbar.classList.remove("sticky");
    d3.selectAll("div.section-title").node().classList.remove("hide")
  }
}


// Get navbar options
var options = d3.selectAll(".nav-link");
options.on("click", handleNavClick);
setNavBorder(d3.select(".nav-link"));


var title = d3.select("#page-header > h1 > a");
title.on("click", (d, i) => {
  d3.selectAll("div.section").style("display", "none");
  d3.select("#home").style("display", "flex");
});

function handleNavClick(d, i) {
  showSection(this);
  setNavBorder(this);
}

function showSection(elem) {
  let opt = d3.select(elem).text();
  id = "#" + opt.split(" ").join("-").toLowerCase();
  d3.selectAll("div.section").style("display", "none");
  d3.select(id).style("display", "flex");
}

function setNavBorder(elem) {
  d3.selectAll(".nav-link").style("border-color", "#FFF");
  d3.select(elem).style("border-color", "#F05454");
}