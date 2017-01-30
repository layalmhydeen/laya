/*var fun1= function(array2){
var filtered=array2.filter(function(character))
if(char==array2[3] && array2.length()>=3)
{
    return 0;
}
    else
        return 1;
}*/

//console.log(fun1(['a','s','n','d','h']));
var fun12= function(array2){
 array2.splice(1,3);
 return array2;
}
console.log(fun12([0,1,2,3,4,5]));