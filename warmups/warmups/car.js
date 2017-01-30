//var status="full time";
var cars=[];
function Car(color,model,miles){
    //constructor its name start in capital letter
    this.color=color ||" no name";
    this.model=model || "no model";
     this.miles=miles || "300";
    
    this.run=function()
    {//methode inside the functio n
        console.log("color:"+ this.color+", "+"model: " +this.model+", miles: "+ this.miles);
    }
 
};
 

var car1 = new Car("Bmw", "red",3000);//initiate
var car2 = new Car("marsedes", "blue",3000);
var car3 = new Car("black", "ja",3000);


cars[0]=new Car("black", "ja",3000);
car1.run();
 car2.run();
cars.push(new Car("marsedes", "blue",3000));
 for(var i=0;i<cars.length;i++){
   cars[i].run();   
 }
var generatArray=function(data){
             cars.push(data);
        for(var i=0;i<4;i++){
            console.log(cars[i]);
        }
    }
//console.log(employee1,employee2,employee3);
generatArray(car3);