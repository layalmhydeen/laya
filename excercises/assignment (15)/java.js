var compareNum = function(a, b)
{
    if(a< b)
      {
          console.log("thelower number is" + a); 
      } 
    else 
        console.log(b);
            
};
compareNum(10,9);




var monkey=function(aSmile,bSmile){
    if((aSmile==true && bSmile==true)||(aSmile==false && bSmile==false))
       { console.log("smiley");
        }
    else if((aSmile==true && bSmile==false)
            ||(bSmile==true && aSmile==false))
        {
            console.log("Intrrouble");
        }
};
monkey(true,true);





var add = function(arg1, arg2)
{ console.log(arg1+arg2);
}
add(4,4);
var compareNumthree = function(a, b, c)
{
    if( a> b && a> c)
      {
          console.log("the largest number is" + a); 
      } 
    else 
        if( b> a && b> c)
      {
          console.log("the largest number is" + b); 
      } 
    else 
          {  console.log("the largest number is" + c); 
          }
};
compareNumthree(3,4,5);





var evenOdd=function(a){
    if(a%2==0)
        {
            console.log("it is even");
        }
    else console.log("it is odd");
}
evenOdd(2);


var array1 = function(has){
   var name = " ";
   if( has.length <= 20)
   {
      name= has.concat(has);
       //has+has
       return name;
       
   }
   else 
   {  
       var data = has.split("");
      var   nam = data.length/2;
    var array2=data.splice(0,nam);
    name=array2.join("");
    //has.lastindex()/2;
     //  name = has.splice(0,num);
       //return has.split(0,num);
       return name;
   }
   
}
console.log(array1("layallayallayallayallayalh"));




var fab=function(n){
 
   if (n <= 2) {
       return 1;
   }
   else {
       return fab(n-1) + fab(n-2);
   }
}
console.log(fab(4));





 
var quad=function(a,b,c){
   //var x1=-b/2/a+Math.pow(Math.pow(b,2)-4*a*c,0.5)/2/a;
//var x2=-b/2/a-Math.pow(Math.pow(b,2)-4*a*c,0.5)/2/a;
   var det = b*b-4*a*c;

   // condition for real and different roots
   if (det > 0)
   {
   // sqrt() function returns square root
       //root1 = (-b+sqrt(det))/(2*a);
       //root2 = (-b-sqrt(det))/(2*a);
var root1=-b/2/a+Math.pow(Math.pow(b,2)-4*a*c,0.5)/2/a;
var root2=-b/2/a-Math.pow(Math.pow(b,2)-4*a*c,0.5)/2/a;
       console.log(root1+"and"+root2);
   }

   //condition for real and equal roots
   else if (det == 0)
   {
      var root1 = var root2 = -b/(2*a);

       console.log(root1);
   }

   // if roots are not real 
   else
   {
       realPart = -b/(2*a);
      imaginaryPart = (Math.pow((-det)/(2*a),0.5);
       //imaginaryPart=9;
       console.log(realPart, imaginaryPart);
   }

   return "lolo";
}   
console.log(quad(3,2,1));
 



// quadratic equation 2nd method

var myEqu= function(a,b,c){ 
   var d=b*b-4*a*c;
   
   if(d==0){
    var root=(-b/2*a);
       console.log("this is the root"+root)
   } else if(d>0)
   {
       var rootPart=Math.sqrt(b*b-4*a*c) ;
       var deNom=2*a;
       var root1=(-b+rootPart)/deNom;
       var root2=(-b-rootPart)/deNom;
   var x=[root1,root2];
   console.log(x);
}
   if(d<0){
       console.log("no solution")
   }
}
myEqu(0,0,0);

