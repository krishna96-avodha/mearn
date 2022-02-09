var student={
    roll_no:101,
    stud_name:"Rahul",
    course:"Mearn_stack",
    total:39000
}
// // print student name
// console.log(student.stud_name);
// console.log(student.course);


// // if any key/properties is present in object
// console.log("gender" in student);

// // adding new property value in to the object
// student["gender"]="male"
// // console.log(student);
// student.isVaccinated=true
// student.vaccin='co-vaxine'
// student.total=40000
// student.total+=500
// console.log(student);


// print all keys in object

for(let key in student){
    console.log(key);
    console.log(student[key]);
}