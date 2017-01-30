 var ask = require('readline-sync');  
var asc=function(){
    var ask = require('readline-sync');  
var input = ask.question('What phrase would you like to encrypt? ').toLowerCase();  
var shift = parseInt(ask.question('How many letters would you like to shift? '));
    var sentence2=[];
   // var code=0;
    for(var i=0;i<input.length;i++){
        console.log("here we are");
//        if(input[i].match(/[a-z]/i)){
//            var code=input.charCodeAt(i);
//            console.log(code);
//            var sen=input[i].code+shift;
//          sentence2[i].push(charCodeAt[sen]);
//        }
//    }
//}
        
        if(input[i].code==65){
             console.log("here");
            var sen=inut[i].code+shift;
           console.log( sentence2[i].push(charCodeAt[sen]));
        }
        else   if(input[i].code==66){
            var sen=inut[i].code+shift;
            console.log( sentence2[i].push(charCodeAt[sen]));
        }   else   if(input[i].code==67){
            var sen=inut[i].code+shift;
         console.log( sentence2[i].push(charCodeAt[sen]));
        }   else   if(input[i].code==68){
            var sen=inut[i].code+shift;
           console.log( sentence2[i].push(charCodeAt[sen]));
        }   else   if(input[i].code==69){
            var sen=inut[i].code+shift;
              console.log( sentence2[i].push(charCodeAt[sen]));
        }   else   if(input[i].code==70){
            var sen=inut[i].code+shift;
              console.log( sentence2[i].push(charCodeAt[sen]));
        }  else   if(input[i].code==71){
            var sen=inut[i].code+shift;
             console.log( sentence2[i].push(charCodeAt[sen]));
        }   else   if(input[i].code==72){
            var sen=inut[i].code+shift;
             console.log( sentence2[i].push(charCodeAt[sen]));
        }  else   if(input[i].code==73){
            var sen=inut[i].code+shift;
             console.log( sentence2[i].push(charCodeAt[sen]));
        }  else   if(input[i].code==74){
            var sen=inut[i].code+shift;
             console.log( sentence2[i].push(charCodeAt[sen]));
        }  else   if(input[i].code==75){
            var sen=inut[i].code+shift;
             console.log( sentence2[i].push(charCodeAt[sen]));
        }   else   if(input[i].code==76){
            var sen=inut[i].code+shift;
              console.log( sentence2[i].push(charCodeAt[sen]));
        }  else   if(input[i].code==77){
            var sen=inut[i].code+shift;
             console.log( sentence2[i].push(charCodeAt[sen]));
        } else   if(input[i].code==78){
            var sen=inut[i].code+shift;
              console.log( sentence2[i].push(charCodeAt[sen]));
        } else   if(input[i].code==79){
            var sen=inut[i].code+shift;
             console.log( sentence2[i].push(charCodeAt[sen]));
        }
    }
}

asc();