var arr=[
    [10,50],
    [20,60],
    [1,2],
    [5,8],
    [30,40]
]
// print all numbers greater than 10
// var flattenarray=[]
// for(let n of arr){
//     for(let num of n){
//         flattenarray.push(num)
//     }
// }
// // a=arr.flat()
// flattenarray.filter(p=>p>10).forEach(n=>console.log(n))

//  print squares of all numbers
arr.flat().map(p=>p**2).forEach(p=>console.log(p))

// print total sum
var total=arr.flat().reduce((n1,n2)=>n1+n2)
// total.forEach(p=>console.log(p))

// print highest element
// arr.flat().reduce((n1,n2)=>n1>n2?n1:n2).forEach(total=>console.log(total))


