//
//function convertBinary(number) {
//  var n = 0;
//  var binaryArr = [];
//
//  var difference = Math.pow(2, n);
//
//  //find out how many digits are needed
//  while (difference <= number){
//    n++;
//    difference = Math.pow(2, n);
//    binaryArr.push(0);
//  }
//
//  n--;
//
//  while(number > 0) {
//    if (Math.pow(2, n) <= number) {
//      binaryArr[n] = 1;
//      number-= Math.pow(2, n);
//    }
//    n--;
//  }
//
//  return binaryArr.reverse().join("") * 1
//}
function even(n){
               if(n%2==0)
                   return true;
               }
function odd(n){
               if(n%2!=0)
                   return true;
               }
function binary (n){
    var pow=0;
    var arr=[];
  while(n!=0){
     if(n%2==0){
        // pow++;
         arr.push(0);
         console.log("array is "+arr+"and pow"+pow);
     }
      else if(n%2==1){
          arr.push(1);
            console.log("array is with remainder"+arr);
      }
     if(even(n)){
         n/=2;
     }
      else n-=1;
}
    console.log("array is" + arr);
//if (pow>0){
//    for(var j=0;j<pow;j++){
//    console.log("array is with remainder"+j);
//}
//    arr.push(1);
//    console.log("array is" + arr);
//}
}
binary(7);