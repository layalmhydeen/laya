  
var readlineSync = require("readline-sync");
var food= readlineSync.question("what is your favorite food:");
console.log("your favorite food is " +food);

console.log(food.toUpperCase());
console.log(food.concat(food));
console.log(food.length);


food.split("");
for(var i=food.length/2; i<=food.length;i++){
   var res=food[i];
   console.log(res);
}


//for(var i=food.length/2; i<food.length;i++){
//    res.push(food[i]);
//    console.log(res);
//  // console.log( res.join(""));
//}
   // console.log(res);
//return res.join('');
// console.log(res);
console.log("new question ");
console.log("the original sentence  is  "+ food);
//var res=[];
var ind= readlineSync.question("where i should began:");
var res1=food.slice(ind,food.length);
console.log( res1);
