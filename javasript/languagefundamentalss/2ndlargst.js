var num1=10,num2=20,num3=100;

if (num1>num2 && num1>num3) {
    if (num2>num3) {
        console.log(` 2ndlargst number is ${num2}`);
      
}   
else {
    console.log(` 2ndlargst number is ${num3}`);
}
}
else if (num2>num1 && num2>num3)
{
    if (num1>num3)
    {
        console.log(` 2ndlargst number is ${num1}`);
    }
    else {
        console.log(` 2ndlargst number is ${num3}`);
    }
}
else if(num3>num1 && num3>num2)
{
    if (num1>num2)
    {
        console.log(`2nd largst number is ${num1}`);
    }
    else {
        console.log(` 2ndlargst number is ${num2}`);
    }
}