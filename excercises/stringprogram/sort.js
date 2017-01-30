var ask = require('readline-sync');
//var num1 =parseInt(ask.question('Enter  Numbers '));
//var num2 =parseInt(ask.question('Enter  Numbers '));
// var num3 = parseInt(ask.question('Enter Number 3 '));
// it is better to write readline sync in a loop if their is repeation 
function sortNumber(a,b) {
    return a - b;
}
function sortNumbers() {
    var num=[];
    var sortArray=[];
var num1 =parseInt(ask.question('Enter  Numbers 1: '));
num.push(num1);
var num2 =parseInt(ask.question('Enter  Numbers 2 :'));
    num.push(num2);
    var num3 = parseInt(ask.question('Enter Number 3 :'));
     num.push(num3);
    
    
    
  //  console.log(num.sort(function(a, b){return a-b}));// sort use only for strings descending for b-a
    for(var i=0;i<=num.length;i++){
      for(var j=i+1;j<=num.length;j++){
        if(num[i]<num[j] ){
  var temp=num[i];
            num[i]=num[j];
            num[j]=temp
       }
    }
   }
     return num;  
}
console.log(sortNumbers());
