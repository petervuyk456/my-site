// Job experience
d3.selectAll(".job-header > a").on("click", function(d, i) {
    window.scrollTo(0, 0);
    id = d3.select(this).attr("href");
    d3.selectAll(".collapse").classed("show", false);
    selected = d3.select(id);
    if  (!(selected[0] == null)) {
      selected.classed("show", selected.classed("show"));
    }
})

// $(document).ready(function() {
//     var hash = window.location.hash;
//     var link = $('a');
//     $('a').click(function(e) {
//       e.preventDefault();
//       hash = link.attr("href");
//       window.location = hash;
//     });
//   });