  
var readlineSync = require("readline-sync");
var evenOdd=function(){
  var number= readlineSync.question("what is number to be checked:");  
    
if(number%2==0){
    console.log("even " +number);
               }
else{
    console.log("odd " +number);
               }
}

