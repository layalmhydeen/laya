//var num=[0,1,2,3,4,5,6,7,8,9];
//var char=["A","B","C","E","F","G"];
//var 
function getRandom(min,max){
  return  Math.floor(Math.random()*(max-min+1))+min;
}
function is_numeric(str){
    return /^\d+$/.test(str);
}
var symbols = 
     "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789$&@?<>~!%#";
var r= getRandom(10,20);
function genPassword(r) {
    
    while(true) {
         console.log("ur ch");
  var password = symbols.charAt(Math.floor(Math.random() * symbols.length));
  //Math.floor(Math.random()*symbols.length);; //new char[r.nextBoolean()?12:13]; var res = String.fromCharCode(72, 69, 76, 76, 79);
                console.log("ur chpassword is" +password);
  var hasUpper = false;
        var hasLower = false;
        var hasDigit = false;
        var hasSpecial = false;
        for(var i=0; i<password.length; i++) {
            
            var ch = //symbols.charAt(r.(symbols.length));
            if(ch== ch.toUpperCase())
                hasUpper = true;
            else if(ch== ch.toLowerCase())
                hasLower = true;
            else if(is_numeric(ch))
                hasDigit = true;
            else
                hasSpecial = true;
            password[i] = ch;
            console.log("ur ch"+ch);
        }
        if(hasUpper && hasLower && hasDigit && hasSpecial) {
            return password;
        }
    }
}
genPassword(r);