$(document).ready(function() {
  $(".reveal").click(function() {
    $(this).next().addClass("hidden");
    $(this).next().next().addClass("visible");
  });
}); // end ready
