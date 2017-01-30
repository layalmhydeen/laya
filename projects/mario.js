document.getElementById("num1").addEventListener("click",multiplyByF); 

function multiplyByF()
{
        num1 = Number(document.getElementById("num1").value);
 var f=num1 * 5;
        document.getElementById("res1").innerHTML = num1 * 5;
}


function multiplyByT()
{
        num2 = Number(document.getElementById("num2").value);
       // num2 = document.getElementById("num2").value;
        document.getElementById("res2").innerHTML = num2 * 10;
}

function multiplyByE()
{
        num3 =Number(document.getElementById("num3").value);
       // num2 = document.getElementById("num2").value;
        document.getElementById("res3").innerHTML = num3 * 11;
}
//function addBy()
//{
//        num1 = Number(document.getElementById("num1").value);
//       // num2 = Number(document.getElementById("num2").value);
//        document.getElementById("result").innerHTML = num1 + num2;
//}
