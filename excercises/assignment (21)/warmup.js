var createEvenArray=function(highestNum){
    var evenArray=[];
    for(var i=1;i<=highestNum;i++){
        if(i%2==0){
        console.log("yes 1");    
            evenArray.push(i);
        }
      
    }
    console.log(evenArray.join(""));
}


//console.log(createEvenArray(10));
 createEvenArray(10);

var addOdds=function(evenOnlyArray){
    for(var i=0;i<=evenOnlyArray.length;i++){
        var num=evenOnlyArray[i]+1
        evenOnlyArray.push(num);
    }
 console.log(evenOnlyArrayjoin(""));
}
//console.log(addOdds([2,4,6]));
addOdds([2,4,6]);