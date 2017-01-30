$("#btn").click(function() {
  var counter = 10;
  var words = "It is the end of the word";
  var repeat = setInterval(function() {
    counter--;
       $("#text").html(counter);
    if(counter == 0) {
    $("#text").html(words);
          clearInterval(repeat);
      //  break;
    }
    },1000)
});