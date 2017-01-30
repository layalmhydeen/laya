
var fab=function(n){
 
   if (n <= 2) {
       return 1;
   }
   else {
       return fab(n-1) + fab(n-2);
   }
}
console.log(fab(50));