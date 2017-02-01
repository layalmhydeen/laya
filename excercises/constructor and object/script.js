var Person=function(name,age){
this.name=name||"layal";
    this.age=age||6;
    this.define=function(){
        console.log("your name is"+name+"  and age is "+ age);
    }
}
var Employee=function(name,status){
this.name=name||"employee";
    this.status=status|| "unemployee";
    this.define=function(){
        console.log("your name is"+name+"  and status is "+ status);
    }
}
var laya={
    name:"layal",
    description:"tireddddd"
}
var p1=new Person("lolo","24");
p1.define();
var p2=new Employee("lolo","");
p2.define();