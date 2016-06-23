var outputResult = function(numInput) {
  var results = [];
  for (var i = 1; i <= numInput; i+=1) {
    return i;
  }
};

$(document).ready(function() {
  $("form#numbers").submit(function(event) {
    var numInput = parseInt($("input#numInput").val());
    var result = outputResult(numInput)
    $("#output").text(result);
    event.preventDefault();
  });
});
