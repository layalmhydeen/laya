var dat=function(){
    var X = new Date['monday','tuesday','wednesday'];
    var day= Date();
    console.log("today is"+ day[X.getDay())];
     console.log("Current time is"+ today.getHours());
}
dat();


var time=function(){
    if (!Date.now) {
  Date.now = function now() {
    return new Date().getTime();
  };
}
}
console.log("Current time is"+ time());