//function square(int){
//    var sq=Math.sqrt(int);
//    console.log(sq);
//if(int>0 && (sq+int)>1){
//    return true;
//}
//}

function inte(num) {
    var sr = [];
    var n = num.toString();

    console.log(n);
    for (var i = 0; i < n.length; i++) {
        sr.push(parseInt(n[i]));
    }
    console.log(sr);
    return sr;
}
inte(12345);

function squr(num) {
    var arr = inte(num);
    console.log(arr);
    var t = 0;
    for (var j = 0; j < arr.length; j++) {
        t += Math.pow(arr[j], 2);
        console.log(t);
    }

    console.log(t);
    if (t == 1) {

        console.log("happy");
    } else {
        squr(t);
    }
}
squr(19);