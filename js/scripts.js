var buildArray = function(numInput) {
  var array = [];
  for (var i = 1; i <= numInput; i+=1) {
	   array.push(i);
  }
  return array;
}

$(document).ready(function() {
  $("form#numbers").submit(function(event) {
    var numInput = parseInt($("input#numInput").val());
    var list = buildArray(numInput);
    $("#output").text(list);
    event.preventDefault();
  });

});
