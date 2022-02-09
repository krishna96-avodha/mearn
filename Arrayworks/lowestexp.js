var expenses=[52000,30000,50000,70000,21000,120000]
var mnexp=expenses[0];
for(let amount of expenses){
    if(mnexp>amount){
        mnexp=amount
    }
}
console.log(mnexp);