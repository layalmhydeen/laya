var Car = function(type, model, color) {
  this.carType = type;
  this.carModel = model;
  this.carColor = color;
  this.start = function() {
    console.log("I turn the key on in the " + this.carType + " car");
    
  };
}
    
    var Student = function(name, age, color) {
  this.name = name;
  this.age = age;
  this.color = color;
  this.create = function() {
    console.log("student name is  " + this.name + " name");
  };
    }
    var School = function(name, type, grade) {
  this.name = name;
  this.type = "english";
  this.grade = "secondary";
  this.generte = function() {
    console.log("this is the   " + this.name + " name");
  };
    }
        var Team = function(name, type) {
  this.name = name;
  this.type = "barca";

  this.generte = function() {
    console.log("this is the   " + this.name + " name");
  };
    }
    var st={
      name:"layal",
        age:70,
        loaction:'beirut',
        marks:[2,5,67,8],
    };
     var st1={
      name:"hasan",
        age:30,
        loaction:'beirut',
        marks:[2,5,67,8],
    };
     var st2={
      name:"nader",
        age:90,
        loaction:'beirut',
        marks:[2,5,67,8],
    };
    var st3={
      name:"mhmd",
        age:90,
        loaction:'beirut',
        marks:[2,5,67,8],
    };
         var st4={
      name:"aber",
        age:90,
        loaction:'beirut',
        marks:[2,5,67,8],
    };
var s1=new School("la","kkk","iii");
s1.generte();