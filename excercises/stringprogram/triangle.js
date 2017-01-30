var readlineSync = require("readline-sync");



var triangle=function(){

 
    
var number1= Number(readlineSync.question("Enter the line numbers to print :"));
 var arr="   *";
    console.log(arr);
     arr1="  "
for(var i=1;i<=number1;i++){
    arr1+=" "
    arr+="**";
    console.log(arr1+"  "+arr);
}
}
    triangle();