//var status="full time";
var employees=[];
function Employee(name,jobTitle,salary,status){
    this.name=name ||" no name";
    this.jobTitle=jobTitle || "unemployee";
     this.salary=salary || "300";
    this.status=status || "fullTime";
    this.printEmployeeName=function()
    {
        console.log("Name:"+ this.name+", "+"Job Title: " +this.jobTitle+", Salary: "+ this.salary+"/hour"+", Status:" +this.status);
    }
    this.generatArray=function(data){
             employees.push(data);
        for(var i=0;i<employees;i++){
            console.log(employees[i]);
        }
    }
}


var employee1 = new Employee("layal", "MIS",3000);
        var employee4 = new Employee();
var employee2 = new Employee("hasan", "MIS",3000,"nnn");
var employee3 = new Employee("Abeerr", "MIS",3000);
employee1.printEmployeeName();
 employee4.printEmployeeName();
employees.push(employee3);
 for(var i=0;i<employees.length;i++){
   employees[i].printEmployeeName();   
 }
//console.log(employee1,employee2,employee3);
