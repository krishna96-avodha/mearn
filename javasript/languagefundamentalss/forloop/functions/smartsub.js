function SmartSub(num1,num2){
    // if (num1>num2) {
    //     return num1-num2
        
    // }
    // else
    // return num2-num1
    return num1>num2?num1-num2:num2-num1

}
// console.log(SmartSub(10,100));
// smartsub with arrowfunction
var smartsub=(num1,num2)=>num1>num2?num1-num2:num2-num1
console.log(smartsub(5,9));