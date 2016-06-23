$(document).ready(function() {
  $("form#numbers").submit(function(event) {
    var numInput = parseInt($("input#numInput").val());
    $("#output").text(numInput);
    event.preventDefault();
  });
});
