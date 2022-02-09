var products=[
    [100,"oreo",40,50],
    [101,"goodday",30,50],
    [102,"hidendseek",50,0],
    [103,"moms's",20,10],
    [104,"treat",70,5],
    [105,"oreo",50,80],
    [106,"oreo",70,50],


]


// // print costly product detail reduce
// var costlypro=products.reduce((prod1,prod2)=>prod1[2]<prod2[2]?prod2:prod1)
// console.log(costlypro);
// // print outofstock products filter
// console.log(products.filter(prod=>prod[3]==0));
// // print oreo details find
// console.log(products.find(prod=>prod[1]=="oreo"));
// // sort products based on available stock order by desc sort
// console.log(products.sort((p1,p2)=>p2[3]-p1[3]));
// // print product details having maximum available stock reduce
// var maxavailablepro=products.reduce((prod1,prod2)=>prod1[3]<prod2[3]?prod2:prod1)
// console.log(maxavailablepro);
// some()
// is any product available 10rs
// var isavilable=products.some(p1=>p1[2]==10)
// console.log(isavilable);
// is there any product with available stock greater than 100
// var isavailbale=products.some(p1=>p1[3]>50)
// console.log(isavailbale);
// is there any product available in range 10-20
// var isavailbale=products.some(p1=>p1[2]<=20 && p1[2]>=10) 
// console.log(isavailbale);
// print all product availabale in range of 10-20
// var availbale=products.filter(p1=>p1[2]<=20 && p1[2]>=10) 
// console.log(availbale);
// print all products
products.forEach(p=>console.log(p[1],p[2]))

// products.forEach(p=>console.log(p[2]))