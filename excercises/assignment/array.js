
function inte(num){
    var sr=[];
  var n=num.toString();
   
     console.log(n);
    for(var i=0;i<n.length;i++){
        sr.push(parseInt(n[i]));
    }
    console.log(sr);
}
inte(12345);