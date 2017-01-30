$("#Hide-button").click(function(){
  $("#text").hide();
})

$("#color-button").click(function(){
    $("#text").css('color','red' );
})
var colors=["black","#aD1457","blue","yellow"];
function randNumber(min,max){
    return Math.floor(Math.random()*(max-min+1));
}
function getColor(){
    return colors[randNumber(0,colors.length-1)];
}
for(var i=0;i<10;i++){
    console.log(getColor());
}