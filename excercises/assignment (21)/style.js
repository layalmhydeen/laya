//$( "#target" ).click(function() {
//     $("box").color("red");
//  alert( "Handler for .click() called." );
//});
//$("#box").mouseleave(function(){
//    alert("Bye! You now leave p1!");
//});
//$("#box").mousedown.css("background-color", "#cccccc");
// $("#box").hover.css("background-color", "red");
$("#box").click(function(){
    $("box").color("red");
});

$( "#box" ).css( "color", "green" );

//$(document).ready(function(){
//    $("#box").hover(function(){
//        alert("You entered p1!");
//    },
//    function(){
//        alert("Bye! You now leave p1!");
//    }); 
//});


 clicked = true;
    $(document).ready(function(){
        $("button").click(function(){
            if(clicked){
                $(this).css('background-color', 'red');
                clicked  = false;
            } else {
                $(this).css('background-color', 'blue');
                clicked  = true;
            }   
        });
    });