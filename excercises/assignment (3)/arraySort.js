function passed(passes){
    var excellent=[];
    var very=[];
    for(var i=0;i<passes.length;i++){
    if (passes[i]<=100 && passes[i]>=90)
        {
         excellent.push(passes[i]);   
        }
    else  if (passes[i]<=90 && passes[i]>=80)
        {
         very.push(passes[i]);   
        }
}
 console.log(excellent);
     console.log(very);
}


function sortStudents(students) {
    var pass=[];
    var fail=[];
    for(var i=0;i<students.length;i++){
        if(students[i].grade<60){
            fail.push(students[i]);
        }else if(students[i].grade>60){
            pass.push(students[i]);

            
    }
    }
    console.log(pass);
    console.log(fail); 
}
var student=[
    {names:"laya",
    grade:70},
     {names:"layal",
    grade:50},
     {names:"lama",
    grade:80},
     {names:"louna",
    grade:100}
    
];
sortStudents(student);
