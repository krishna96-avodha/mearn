var expenses=[2000,30000,50000,70000,21000,120000]
var mxexp=0;
for(let amount of expenses){
    if(mxexp<amount){
        mxexp=amount
    }
}
console.log(mxexp);