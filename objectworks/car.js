var baleno={
    name :"baleno",
    model:"hatchback",
    manufacture:"maruthi",
    price:"100k"

}
console.log(baleno.manufacture);
if("model" in baleno){
    console.log(baleno.model);
}
baleno.vareint=["manual"]
console.log(baleno);
baleno.vareint.push("auto")
console.log(baleno.vareint);
baleno.color=['red']
baleno.color.push("blue")
console.log(baleno.color);