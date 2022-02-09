products = [
    {
      pid: 100,
      p_name: "samsungA52",
      band: "5g",
      price: 30000,
      display: "amoled",
    },
    {
      pid: 101,
      p_name: "samsungf41",
      band: "4g",
      price: 15000,
      display: "amoled",
    },
    {
      pid: 102,
      p_name: "mi10promax",
      band: "4g",
      price: 19000,
      display: "amoled",
    },
    { pid: 103,
       p_name: "mi11lite",
        band: "5g", 
        price: 22000,
         display: "led" ,},
    {
      pid: 104,
      p_name: "iphone12pro",
      band: "5g",
      price: 80000,
      display: "amoled",
    },
    { pid: 105, p_name: "realme", band: "4g", price: 12000, display: "led" },
  ];
  
  
  
  
  // # print product names only
// for (let pro in products){
//   console.log(pro['p_name'])
// }
// products.forEach(p=>console.log(p.p_name))  
  // # print all mobile details whose display="amoled"
  // products.map()
// products.filter(pro=>pro.display='amoled').forEach(pro=>console.log(pro))
  // # print 5g moboile names
  // products.filter(pro=>pro.band='5g').forEach(pro=>console.log(pro))

  // # filter mobiles based on price
  // products.sort((p1,p2)=>p1.price-p2.price).forEach(p=>console.log(p))
  
  // # print costly mobile
  // var costlypro=products.map(p=>p.price).reduce((p1,p2)=>p1>p2?p:p2)
  // console.log(costlypro);
  // # print low cost mobile
  var cheappro=products.map(p=>p.price).reduce((p1,p2)=>p1>p2?p2:p1)
  console.log(cheappro);
