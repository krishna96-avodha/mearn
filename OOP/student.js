// craete a new class student  setstuden(roono,stname,couse,total)printdetails 

class Student{
    // setStudent(roll_no,st_name,course,total){
    //     this.rollno=roll_no;
    //     this.studentName=st_name;
    //     this.course=course;
    //     this.Total=total;
    // }
    constructor(roll_no,st_name,course,total){
        this.rollno=roll_no;
        this.studentName=st_name;
        this.course=course;
        this.Total=total;
    }
    printDetails(){
        console.log(this.rollno,this.studentName,this.course,this.Total);
    }
}
var stud=new Student(101,"krishna","mearnstack",35000)
// stud.setStudent(101,"krishna","mearnstack",35000)
stud.printDetails()