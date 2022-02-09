var arr=[10,10,20,30,30,30,40,20,10,40]
var wc={}
// for(let num of arr){
//     if(num in wc){
//         wc[num]+=1
//     }
//     else{
//         wc[num]=1
//     }
// }
// console.log(wc);
arr.map(num=>num in wc?wc[num]+=1:wc[num]=1)
console.log(wc);
