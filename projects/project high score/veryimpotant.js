$(document).ready(function() {
  var render = function() {
  $("#output").html("");
  people.sort(function(a, b) {
    return a.score - b.score;
  });
  for(var i = 0; i < people.length; i++) {
        $("#output").append("<div><span>Name:" + people[i].name  +"</span>"+ " <span>     Game: " +  people[i].game +"</span>"+ "        Score: <span>" +  people[i].score +"</span>"+"</div>");
//      $("#nameoutput").append("<div>Name:" + people[i].name  +"</div>");
//      $("#gameoutput").append("<div>Game:" + people[i].game  +"</div>");
//      $("#scoreoutput").append("<div>Score:" + people[i].score  +"</div>");
   };
}
  
$("#submit").click(function() {
  people.push({
    name: $("#name").val(),
       game: $("#game").val(),
    score: $("#score").val(),
  });
    console.log(people);
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



//for (var i = 0; i < people.length; i++) {
//        $(".output").append("<div>first name: " + people[i].fname + " last name: " + people[i].lname + "date: " + people[i].date + "score: " + people[i].score+"</div>");