// When the user scrolls the page, execute myFunction
window.onscroll = function() {stickyNav()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyNav() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}


// Get navbar options
var options = d3.select("nav#navbar").selectAll("a");

options.on("click", handleNavClick)
       .on('mouseover', handleMouseOver)
       .on('mouseout', handleMouseOut);

function handleNavClick(d, i) {
  let opt = d3.select(this).text();
  id = "#" + opt.split(" ").join("-").toLowerCase();
  d3.selectAll("div.section").style("display", "none");
  d3.select(id).style("display", "flex");
  
  d3.selectAll("nav > a").style("border-color", "#f9f9f9")
  d3.select(this).style("border-color", "#F05454")
}

function handleMouseOver(d, i) {
  d3.select(this).style("color", "#F05454")
}

function handleMouseOut(d, i) {
  d3.select(this).style("color", "#222831")
}