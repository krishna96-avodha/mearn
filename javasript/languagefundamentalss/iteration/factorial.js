var num1=5;
var fact=1;
var i=1;
if (num1<0) {
 console.log('invalid');   
}
else if (num1==1) {
    console.log('factorial is 1');
}
else{
    while (i<=num1) {

        fact=fact*i;
        i++
    }
    console.log(`factorial :${fact}`);
}