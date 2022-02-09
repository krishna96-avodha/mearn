var arr=[10,3,4,12,5]
var element=12;
var flag=0;
var count;
for(let i of arr){
    if(i==element){
        flag=1
        break;
    }
   count++;
}
console.log(flag==1?"element found":"not found");
console.log(count);

// to find the position of element :  'in' operator
// for(let pos in arr){
//    if(element==arr[pos]){
//        console.log("position:",pos);
//        flag=1;
//        break;
//    }
// }
// console.log(flag==0?"not found":"found");