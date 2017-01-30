document.getElementById("calculate").addEventListener("click",calculateAdd); 
var calculateAdd=Function() 
{
    console.log("hi is sum");
   var a=Number(document.getElementById("number1").value);
   var b=Number(document.getElementById("number2").value);
   var c=Number(document.getElementById("number3").value);

   //document.getElementById("demo").innerHTML=d+"lll";parseInt(a.value)
   document.getElementById("total").innerHTML=a+b+c;
  // document.getElementById("total").total.value=calculateAdd(); 
}
