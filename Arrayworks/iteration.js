// 3type of iteration 
//  1.of 
//  2.in 
//  3.length:it is not a method, it is asproperty, which returns the total number of object in the array.

// var arr=[2,3,4,2,2,33,4,4,5,55,33]
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }

var fruits=["apple","orange","grapes","pinapple"]
// 1.
for(let fruit of fruits){
    console.log(fruit);
}
// 2.
for(let index in fruits){
    console.log(fruits[index]);
}
// 3.
for(let i=0;i<fruits.length;i++){
    console.log(fruits[i]);
}

