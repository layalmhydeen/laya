var arrange= function(){
var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"];  
var alphabet = "abcdefghijklmnopqrstuvwxyz"; 
    var array1=[];
    var alpha=alphabet.split("");
    for(var j=0; j<people.length;j++){
//        array1+=people[j];
        array1.push(people[j]);
        for(var i=0; i<alpha.length;i++){
//    array1+=alpha[i];
            array1.push(alpha[i]);
            
           // console.log(array1);
//            break;
    }
}
    console.log("[ "+array1.join(",")+"]");
}
console.log("to get result");
arrange();