//Back End Logic
var vote = function(age) {
  //if legal do this
 if (age >= 18) {
   $("#over-18").show();
 }
 //if minor do this
 else {
   $("#under-18").show();
 }
};



//Front End
$(document).ready(function() {
  var age = parseInt(prompt("How old are you?"));
  var legal = vote(age);
});
