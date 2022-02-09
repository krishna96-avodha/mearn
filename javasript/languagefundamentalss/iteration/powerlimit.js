var num=2,low=8,upp=36;
var i=0;
while (i<=upp) {
    let res=i**num;
    if (res>=low && res<=upp) {
        console.log(res);
    }
}