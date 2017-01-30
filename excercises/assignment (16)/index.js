var repeat=function(name){
    var nam= name.split(" ");
    var oneLetter= "";
    var repeatBox= "";
    for(var i=0;i<=nam.length;i++){
        if(nam[i] == nam[i+1])
        {
          oneLetter = nam[i];
            repeatBox= nam[i+1];
         }
        else 
        {
            oneLetter = nam[i];
        }
     console.log( repeatBox +"    "+ oneLetter);
    }
   
    
}
 console.log(repeat("bookkeeper larry"));


var noDup1=function(data){
   data1 = data.split("");
   var tem=" ";
   var dup=" ";
    var letter="";
   for ( var i=0; i<=data1.length; i++)
   {
       for (var x = i+1; x<=data1.length; x++){
        if(data1[i] == data1[x]){
           tem=data1[i];
        console.log(tem +"new");
   }else {
       dup=data1[i];
         console.log(dup +"    ");
   }
       }
       
   }
  console.log("dup    " +dup + "  no dup "+tem);
  
}

noDup1("hassan");



var noDup=function(data)
{
   data1 = data.split("");
   var tem=" ";
   var dup=" ";
    var letter="";
   for ( var i=0; i<=data1.length; i++)
   {
       letter=data1[i];
       for (var x = i+1; x<=data1.length; x++){
        if(letter==data1[x]){
            tem=letter;
        }
     console.log("  no dup "+tem);  
   }
  console.log("dup    " +dup + "  no dup "+tem);
  
}

noDup("hassan");