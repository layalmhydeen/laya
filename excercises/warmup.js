var createEvenArray=function(highestNum){
    var evenArray=[];
    for(var i=1;i<=highestNum;i++){
        if(i%2==0){
            evenArray.push(i);
        }
        return evenArray;
    }
}


console.log(createEvenArray(10));
 

var addOdds=function(evenOnlyArray){
    for(var i=0;i<evenOnlyArray.length;i++){
        evenOnlyArray.push(evenOnlyArray[i]+1);
    }
    return evenOnlyArray;
}
console.log(addOdds([2,4,6]));