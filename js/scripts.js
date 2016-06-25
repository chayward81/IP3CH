var pingPong = function(numbers) {
  for (var i = 1; i <= numbers.length; i += 1) {
  	if (numbers[i] % 3 === 0) {
  		numbers.splice(i, 1, "ping");
    }
  }
  return numbers;
}

var buildArray = function(numInput) {
  var array = [];
  for (var i = 1; i <= numInput; i+=1) {
	   array.push(i);
  }
  return array = pingPong(array);
}

$(document).ready(function() {
  $("form#numbers").submit(function(event) {
    var numInput = parseInt($("input#numInput").val());
    var list = buildArray(numInput);
    $("#output").text(list);
    event.preventDefault();
  });

});
