function getRandom(min,max){
  return  Math.floor(Math.random()*(max-min+1))+min;
}
//for(var i=0;i<100;i++){
//    console.log(getRandom(0,100));
//}

var Enemy = function(type){
   var type = type;// cz it is an array ma bt5od thsi 
    this.enemytype = "";
    this.defense = 0;
    this.hitpoints = 0;
    //this.defense=defense;
    this.generate=function(){
        var index = getRandom(0, type.length-1);
        
        this.enemytype = type[index];
        
        if(this.enemytype==="Ancient Dragon"){
            this.hitpoints=getRandom(80,100);
            this.defense=this.hitpoints*3;
            
        }else if(type[index]==="Prowler"){
            this.hitpoints=getRandom(50,79);
              this.defense=this.hitpoints*3;
            
            
        }else if(this.enemytype==="Mighty Grunt"){
            this.hitpoints=getRandom(20,49);
              this.defense=this.hitpoints*3;
    }
    
}
}

var etype = ["Ancient Dragon","Prowler","Mighty Grunt"];

for(var i=0; i<100; i++){
    var tempEnemy= new Enemy(etype);
    tempEnemy.generate();
    console.log(tempEnemy.enemytype+"\n"+tempEnemy.defense+"\n"+tempEnemy.hitpoints);
}