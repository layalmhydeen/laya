$(document).ready(function() {
  var render = function() {
  $(".output").html("");
  people.sort(function(a, b) {
    return a.score - b.score;
  });
  for(var i = 0; i < people.length; i++) {
        $(".output").append("<>Name:" + people[i].name  + " Game: " +  people[i].game + " Score: " +  people[i].score +"</div>");
   };
}
  
$("#submit").click(function() {
  people.push({
    name: $("#name").val(),
       game: $("#game").val(),
    score: $("#score").val(),
  });
  render();
  $("#name").val("");
    $("#game").val("");
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