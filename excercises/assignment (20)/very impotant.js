$(document).ready(function() {
  var render = function() {
  $(".output").html("");
  people.sort(function(a, b) {
    return a.score - b.score;
  });
  for(var i = 0; i < people.length; i++) {
        $(".output").append("<>Name:" + people[i].name  + " Score: " +  people[i].score +"</div>");
   };
}
  
$("#submit").click(function() {
  people.push({
    name: $("#name").val(),
    score: $("#score").val()
  });
  render();
  $("#name").val("");
  $("#score").val("");
  localStorage.setItem("people", JSON.stringify(people));
});

  if(localStorage.getItem("people")) {
     var people = JSON.parse(localStorage.getItem("people"));
     render(); 
  } else {
    var people = [];
  }
});