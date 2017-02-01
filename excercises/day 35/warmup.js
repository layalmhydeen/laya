function currency(num){
    num=(""+num).split("");
    var arr=[];
     var c=0,doteLoc=0;
    var count=0;
    for(var i=0;i<num.length;i++){
      
          if(num[i]=='.') 
            {doteLoc=i;
                c=num.length-i-1;}
         }
        console.log("c"+c)
        for(var j=0;j<num.length;j++){
            console.log(num[j])
            if(num[j]=="."){
                break;
            }
            arr.push(num[j]);
            count++;
            if(count==3){
                arr.push(",");
                count=0;
            }
        }  
     arr= arr.reverse();   
    for(var i=doteLoc;i<num.length;i++){
        
       arr.push(num[i]);
         }
    console.log(arr.join("")+"$");
    }
currency(9824.01);
currency(449824777.01);