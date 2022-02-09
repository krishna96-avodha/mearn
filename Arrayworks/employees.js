var employees=[
    [1000,"ram","developer","kochi",25000,1],
    [1000,"ravi","developer","kochi",35000,2],
    [1000,"arjun","qa","tvm",34000,1],
    [1000,"tom","qa","tvm",45000,2],
    [1000,"jim","ba","banglore",55000,3],
    [1000,"tinu","ba","banglore",35000,2],
    [1000,"fred","sales","mumbai",45000,2],
    [1000,"abi","sales","mumbai",65000,5],

]
// total salary
 var totalsalary=employees.map(emp=>emp[4]).reduce((sal1,sal2)=>sal1+sal2)
 console.log("total-salary:",totalsalary);
// min salarey
var minsalary=employees.reduceRight((emp1,emp2)=>emp1[4]<emp2[4]?emp1[4]:emp2[4])
console.log("minimumsalary:",minsalary);

// var minsalary=employees.map(emp=>emp[4]).reduce((sal1,sal2)=>sal1<sal2?sal1:sal2)
// console.log("minimumsalary:",minsalary);

// highest salary
var maxsalary=employees.reduce((emp1,emp2)=>emp1[4]<emp2[4]?emp2:emp1)
console.log("maxmumsalary:",maxsalary[4]);

// var maxsalary=employees.map(emp=>emp[4]).reduce((sal1,sal2)=>sal1<sal2?sal2:sal1)
// console.log("maximum-salary:",maxsalary);

// lowest exp

var lowexp=employees.reduce((emp1,emp2)=>emp1[5]<emp2[5]?emp1:emp2)
console.log(lowexp[1]);










// 1.print all employee names

// for(employee of employees){
//     console.log(employee[1])
// }

// console.log(employees.map(emp=>emp[1]));


// // 2. print number of employees in employees

// console.log(employees.length);

// // 3.print developer details only 

// for(let emp of employees){
//     if (emp[2]=="developer"){
//         console.log(emp);
//     }
// }

// var developer=employees.filter(emp=>emp[2]=="developer")
// console.log(developer);




// 4.print employer dewtails whose salary >30000

// for(let emp of employees){
//     if(emp[4]>30000){
//         console.log(emp);
//     }
// }


// console.log(employees.filter(emp=>emp[4]>30000));

// 5.print details of employye arjun 

// console.log("details of arjun");
// for(let emp of employees){
//     if(emp[1]=="arjun"){
//         console.log(emp);
//     }
// }


// console.log(employees.find(empname=>empname[1]=="arjun"));

// 6.sort employees based on sarlary by desc 
// employees.sort((emp1,emp2)=>emp2[4]-emp1[4])
// console.log(employees);



// 7. soert employye based on eperience order by asc
// employees.sort((emp1,emp2)=>emp1[5]-emp2[5])
// console.log(employees);
// 8.all eperience 
// console.log(employees.map(emp=>emp[5]));