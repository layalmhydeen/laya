function getRandom(min,max){
  return  Math.floor(Math.random()*(max-min+1))+min;
}
function generatePassword() {
    var length = getRandom(10,20);
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#%$^$%^&^$*()!~",
        retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
}
document.getElementById("p").value=generatePassword();
