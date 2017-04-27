$(document).ready(function() {
  var age = parseInt(prompt("How old are you?"));

  //if legal do this
  if (age >= 18) {
    $("#over-18").show();
  }
  //if minor do this
  else {
    $("#under-18").show();
  }
});
