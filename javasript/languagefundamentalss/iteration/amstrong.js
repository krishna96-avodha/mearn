var num1=153;
var result=0;
while (num1!=0) {
    
    var reminder=num1%10;
     result+=reminder*reminder*reminder;
    num1=Math.floor(num1/10);
}
  console.log(result);
