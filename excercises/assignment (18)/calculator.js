

console.log("js");

var calco = function (){    
    console.log("in function");
    document.getElementById("total").innerHTML="hi is sum";
    var  a=document.getElementById("number1").value;
    var  b=document.getElementById("number2").value;
    var  c=document.getElementById("number3").value;
    var  d=Number(a)+ Number(b)+Number(c);
    console.log(d);       
    document.getElementById("total").value= d;
   //document.getElementById("demo").innerHTML=d+"lll";parseInt(a.value)  parseInt(d.value)
  // document.getElementById("total").innerHTML=a+b+c;
  // document.getElementById("total").total.value=calculateAdd(); 
};

document.getElementById("calc").addEventListener("click",calco); 
/*</html>


function myDay()
{
    var d = new Date();
    var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];    
    document.getElementById("day").innerHTML = days[d.getDay()];
    
}
function myTime()
{
 
     var d = new Date();
    var time = d.toLocaleTimeString();
    document.getElementById("time").innerHTML = time;
  
}



myTime();
myDay();*/