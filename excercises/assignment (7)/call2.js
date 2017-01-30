var count;
var name = document.getElementById("nameid").value;
 document.getElementById("demo").innerHTML=name;
$("#btn").click(function(){
    var name = document.getElementById("nameid").value;
 document.getElementById("demo").innerHTML=name;
  alert("Btn 1 Clicked"+name);
    if(name=="layal")
        {
            openWin();
        }
    else {
       var num= count();
        console.log("hahah it is wrong name "+ num);
        lili();
          }
});




function lili(){
    console.log("can you just laugh on yor self now :P ");
}
function openWin() {
 //   window.open("http://www.w3schools.com");
      window.open("file:///C:/classwork/excercises/day%2023/call2.html");
}
function count(){
  count++;
    return count;
}
$(document).ready(function(){
  $("demo").click(function(){
    $(this).hide();
    picturesRemoved++;
  });
});