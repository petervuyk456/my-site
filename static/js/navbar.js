// When the user scrolls the page, execute myFunction
window.onscroll = function() {stickyNav()};

// Get the navbar
var navbar = d3.select("#nav");

// Get the offset position of the navbar
var sticky = navbar.property("offsetTop");
var sectionTitle = d3.selectAll("div.section-header");
var sectionContainer = d3.selectAll("div.section-container");

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyNav() {
  if (window.pageYOffset*1.5 >= sticky) {
    navbar.classed("sticky", true);
    sectionTitle.classed("hide", true);
    sectionContainer.classed("offset", true);
  } else {
    navbar.classed("sticky", false);
    sectionTitle.classed("hide", false);
    sectionContainer.classed("offset", false);
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

var x
function handleNavClick(d, i) {
  showSection(this);
  setNavBorder(d3.select(this));
}

function showSection(elem) {
  let opt = d3.select(elem).text();
  id = "#" + opt.split(" ").join("-").toLowerCase();
  d3.selectAll("div.section").style("display", "none");
  d3.select(id).style("display", "flex");
}

function setNavBorder(elem) {
  d3.selectAll(".nav-link").style("border-color", "#FFF");
  elem.style("border-color", "#F05454");
}