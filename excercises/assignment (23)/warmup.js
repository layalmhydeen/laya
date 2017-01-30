var powerup=false;
var namePicked=["Mario","Lougi"];

function getRandom(min,max){
  return  Math.floor(Math.random()*(max-min+1))+min;
}
var Player= function (name,totalCoins,status ,star){
    
    this.name=name;
    this.totalCoins=0;
    var statuses=["Powered UP","Big","Small","Dead"];
    this.status="Small";
    this.star=false;
    this.setName=function(namePicked){
//          var index = getRandom(0,namePicked.length-1);
//        this.namePick=namePicked[index];
//        console.log(namePick);
        this.name=namePicked;
    }
     this.gotHit =function(){
          var index = status.indexOf(this.status);
         index +=1;
         if(index >=statuses.length-1){
             this.gameActive=false;
         }
         this.status=statuses[index];

};

this.gotPowerup()=function{
    var index=statuses.indexOf(this.status);
    if(index<statuses.lenght-1){
        index+=1;
        this.status=statuses[index];
    }
    else{
        console.log("Max POWER");
    }
    };
    this.addCoins=function(amount){
        this.totalCoins+=amount;
    }
    
}