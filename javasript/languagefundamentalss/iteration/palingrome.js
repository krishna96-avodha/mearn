var num1=123;
var str=''
while (num1!=0) {
    let lastdigit=num1%10;
    // console.log(lastdigit);
    str=str+lastdigit
    num1=Math.floor(num1/10);
}
    console.log(str);
