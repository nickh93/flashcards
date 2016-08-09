$(document).ready(function() {
  $(".reveal").click(function() {
    // This will hide the first sibling of the clicked class and reveal the second sibling over
    $(this).next().addClass("hidden").next().removeClass("hidden");
  });
}); // end ready
