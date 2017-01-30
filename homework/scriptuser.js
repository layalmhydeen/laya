var readlineSync = require("readline-sync");
var number1= readlineSync.question("Enter your first number");
var number2= readlineSync.question("what is your favorite food:");
var operator = readlineSync.question("what is your favorite food:");
console.log("your favorite food is " +food);

console.log(food.toUpperCase());
console.log(food.concat(food));
console.log(food.length);


if(food.length>=20){
var res=food.slice(food.length/2,food.length);
    console.log(res);
}else console.log("food length less than 20");


var ind= readlineSync.question("where i should began:");
var res1=food.slice(0,ind);
console.log( res1);
var text= readlineSync.question("if u want to contiue ");
console.log(food+""+text+"");