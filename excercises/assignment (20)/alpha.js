//var alpha1=function (){
//    var omega='\u03A9';
//    var alpha='\u03B1';
//    
//    for(var i=0;i<=10;i++){
//        var array1=[];
//       for(var j=0;j<=10;j++){
//           if(j%2==0){
//               //  console.log(omega);
//               array1.push(omega);
//    }
//           else 
//              {// console.log(alpha);
//                  array1.push(alpha);
//              }
//        
//}
//        
//        
//        
//         console.log(array1.join(" "));
//        //console.log("\n");
//    }
//}
//alpha1();
var alpha1=function (){
    var omega='\u03A9';
    var alpha='\u03B1';
     var array1=[];
    for(var i=0;i<=10;i++){
       array1[i]=[];
       for(var j=0;j<=10;j++){
           if(j%2==0){
               //  console.log(omega);
               array1[i].push(omega);
    }
           else 
              {// console.log(alpha);
                  array1[i].push(alpha);
              }
        
}
        
        
        
         console.log(array1[i].join(" "));
        
        //console.log("\n");
    }
}
alpha1();