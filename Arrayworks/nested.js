// print all numbers less than 10
var arr=[
    [1,2],
    [11,3],
    [4,15],
    [5,16]
]
for(let subarray of arr){
    for(let  num of subarray){
        if(num<10){
            console.log(num);
        }
    }
}