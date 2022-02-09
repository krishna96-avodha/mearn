var coivd_data=[
    [1,"trivandrum",40000,200,38000,8,5],
    [2,"kollam",35000,250,33000,7,3],
    [3,"kottayam",50000,500,45000,5,2],
    [4,"alapuzha",25000,150,24000,9,5],
    [5,"ernamkulam",70000,500,65000,9,5],
    [6,"thrissur",65000,550,60000,8,7],
    [7,"iduky",1000,50,9500,9,6]   
]

// q1 higest test + ve case district


var redcategory=coivd_data.reduce((d1,d2)=>d1[2]>d2[2]?d1:d2)
console.log(redcategory[1]);





// q2 district with higest 1 dose vaccination rate

var highfirstdose=coivd_data.reduceRight((d1,d2)=>d1[5]>d2[5]?d1:d2)
maxFirstDosedistrict=coivd_data.filter(d1=>d1[5]== highfirstdose[5]);
console.log(maxFirstDosedistrict);



   
// var highest=0;
// for(let firstdose of coivd_data){
//     if(highest< firstdose[5]){
//         highest=firstdose[5];
//     }
// }
//   console.log("higest",highest);

  


// q3 district with lowest death cases

var redcategory=coivd_data.reduce((d1,d2)=>d1[4]>d2[4]?d1:d2)
console.log(redcategory[1]);




// var dis;
// for(let suarray of coivd_data){
//     var lowest=suarray[3];

//         if(lowest > suarray[3]){
//             lowest=suarray[3]
//             // dis=lowest[1]
           
//         }
//     }

// console.log(lowest);




// q4 sort district with +ve cases

// coivd_data.sort((dis1,dis2)=>dis1[2]-dis2[2])
// console.log(coivd_data);


// q5 sort the districts based on 1st dose
// coivd_data.sort((dis1,dis2)=>dis1[1]-dis2[1])
// console.log(coivd_data);



// q6 is there any states with +ve cases > 60000

console.log(coivd_data.filter(pos=>pos[2]>60000)?"yes":"no");


// q7 print trissur details
// for(let cov of coivd_data)
// {
//     if(cov[1]=="thrissur"){
//         console.log(cov);
//     }
// }

// console.log( coivd_data.filter(detail=>detail[1]=="thrissur"));


// q8 total nu,ber of +ve cases
// var positive=coivd_data.map(pos=>pos[2])
// // console.log(positive);
// var sum=0;
// for(let data1 of positive){
// sum+=data1
// }
// console.log(sum);

// q9 total number of cured cases
// var cured=coivd_data.map(cur=>cur[3])
// var total=0;
// for(let data1 of cured){
// total+=data1
// }
// console.log(total);



// q10 cured numbers of iduky
// var idukydetails=coivd_data.filter(data=>data[1]=="iduky")
// console.log(idukydetails[0][4]);


// print all positive cases and district

// console.log(coivd_data.map(data=>[data[1],data[2]]));