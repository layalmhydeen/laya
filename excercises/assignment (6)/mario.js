$("head , body").css({
    "width": "100%",
    "background-image" : "url(image/background.jpg)"
});

$(".title").css(
    {"text-align":"center",
     "color":"yellow",
     "font-size":"80px" ,
     "font-family":"'Indie Flower', cursive"});

$(".title").hover(function(){
    $(this).css(
        {"text-align":"center" ,
         "color": "red","font-size":"80px",
         "font-family":"'Fjalla One', sans-serif"});
    },function()
    {$(this).css(
        {"text-align":"center",
         "color":"yellow",
         "font-size":"80px" ,
         "font-family":"'Indie Flower', cursive"});
})

$(".Pik, .char, .Bul").css
({
    "font-size": "22px",
    "text-align": "center",
    "padding": "15px",
    "margin":"0.5%",
    "border-radius":"10%"
});

$(".Pik").css({
    "color":"#877800 ",
    "background-color":"yellow"});
$(".char").css({
    "color":"#B13E00 ",
    "background-color":"orange"});
$(".Bul").css({
    "color":"#1EAC00 ",
    "background-color":"green"});

$(".photo").css({"text-align":"center"});

$("footer").css(
    {"text-align":"center",
     "background-color": "grey",
     "color":" whitesmoke",
     "font-size": "15px",
     "margin-top": "75px"});

$(".total").css(
    {"color":"red",
     "font-size": "20px",
     "font-family": "'Fjalla One', sans-serif",
     "text-align":"center"});

$(".result").css(
    { "text-align":"center",
     "font-size":"10px"})
$(".labelName").css(
    { "text-align":"center",
     "font-size":"15px"})

$( "#Pik" ).click(function() {
    var Pik = $( this ).val();
    $("#pikRes").val(Pik * 5);
  })
  


$( "#Char" ).click(function() {
    var Char = $( this ).val();
    $("#charRes").val(Char * 11);
  })



$( "#Bul" ).click(function() {
    var Bul = $( this ).val();
    $("#bulRes").val(Bul * 7);
  })
  .keyup();

$(document).ready(function() {
      $("#Pik,#Char,#Bul").click(function() {
        var res =Number($("#pikRes").val()) +Number($("#charRes").val())+Number($("#bulRes").val());
        $("#addRes").val(res);

});
})