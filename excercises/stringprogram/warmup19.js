var ask = require('readline-sync');
var str = ask.question('What phrase would you like to encrypt? ');
//.toLowerCase(); 
//
//var case=function(){
//    var str = ask.question('What phrase would you like to encrypt? ');
//    if(str===str.lowercase){
//    console.log("uppercase"+str.uppercase);    
//    } else if(str===str.uppercase){
//    console.log(str.toLowerCase());    
//    }
//}
//case();
//  return (/^[^a-z]*$/).test(str);

function isCaps(letter) {  // return boolean is true or false
  return letter === letter.toUpperCase();
}
function isLower(letter) {  // return boolean is true or false
  return letter === letter.toLowerCase();
}
function antiCaps(str){
    var stra=[];
    for(var i=0;i<str.length;i++){
        if(isCaps(str[i]))
            {
              //stra.push(str[i].lowercase);
                stra+=str[i].toLowerCase();
                //console.log("this is : "+stra);
            }
        else if(isLower(str[i]))
            {   
                stra+=str[i].toUpperCase();
              //stra.push(str[i].uppercase);  
            }
    }
    console.log("this is : "+stra);
}
antiCaps(str);


/*while(enimes.length > 0) {
    player = new Player();
    userinput = userinput;
    if(userinput == "w") {
        var chance = 50 % 50;
        if(chance > 50) {
            var enemy = randomEnemey();
            console.log("You have met an enemy " + enemy.name);
            while(player.health > 0 && enemy.health > 0) {
                console.log("Attack or run")
                userinput = userinput;
                if(userinput == "r") {
                    chance = 50 % 50;
                    if(chance > 50) {
                        console.log("You have escaped");
                        break;
                    } else {
                        console.log("No luck you didnt escape");
                    }
                } else if(userinput == "a") {
                    chance = 50 % 50;
                    if(chance > 50) {
                        var damage = 50 -> 100;
                        console.log("You hit the enimy for " + damage);
                        enemy.health -= damage;
                        if(enemy.health <= 0) {
                            console.log("You killed the enemy here is your reward");
                            var reward = randomAward();
                            player.inv.push(reward);
                        }
                    } else {
                        console.log("YOu missed")
                    }
                    
                } else {
                    console.log("You idoit thats not an option");
                }
                console.log("Its now the enemies turn");
                chance = 50 % 50;
                if(chance > 50) {
                    var damage = 50 -> 100;
                    console.log("enimey hit you for " + damage);
                    player.health -= damage;
                } else {
                    console.log("Enemy missed");
                }
                
            }
            if(player.health <= 0) {
                console.log("You died fool");
                break;
            }
 
        }
    }
}
if(player.health <= 0) {
    console.log("You lost");
} else {
    console.log("You won heres all the gear you got");
    console.log(player.inv);
}*/









