// // spread operetor(...)

// function add(...args){
//     // console.log("arg method");
//     // console.log(args);
//     return args.reduce((n1,n2)=>n1+n2)
// }
// console.log(add(20,30));
// console.log(add(100,200,20000));

function findmax(...args){
    return args.reduce((n1,n2)=>n1>n2?n1:n2)
}
console.log(findmax(10,20,30,40,50));