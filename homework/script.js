var readlineSync = require("readline-sync");



var calculator=function(){
    do{
var number1= Number(readlineSync.question("Enter the first Number :"));
var operator= (readlineSync.question("Enter operator you want to use:"));
var number2= Number(readlineSync.question("Enter the secoond Number:"));

if(operator=='+'){

   console.log(number1 + "+"+ number2 + "=" + (number1+number2));
}else if(operator=='-'){

   console.log(number1 + "-"+ number2 + "=" + (number1-number2));
}      else if(operator=='*'){

   console.log(number1 + "*"+ number2 + "=" + (number1*number2));
   
} else if(operator=='/'){

   console.log(number1 + "/"+ number2 + "=" + (number1/number2));
   
}else if(operator=='%'){

   console.log(number1 + "%"+ number2 + "=" + (number1%number2));
   
}
        var answer=(readlineSync.question("Do you want to complete calculations ?")); 
    } while(answer=="yes")
        }
        calculator();