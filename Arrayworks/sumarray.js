var arr=[3,4,5] 
// op=[9,8,7]
var total=0;
var op=[];

for(let item of arr){
    total+=item;
}
// console.log(total);
for(let item of arr){
    op.push(total-item);
}
console.log(op);