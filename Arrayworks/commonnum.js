// // common numbers from 2 array

// var arr=[10,11,12,20,30]
// var arr2=[11,20,21,30,31]
// for(let i=0;i<arr.length;i++)
// {
//     for(let j=0;j<arr.length;j++){
//         if(arr[i]==arr2[j]){
//             console.log(arr[i]);
//         }
//     }
// }


// Reduce the complexity of the above prgrm , here use binary search method 

var arr=[10,11,12,20,30]
var arr2=[11,20,21,30,31]
var count=0;
var p1=0,p2=0;
while ((p1<arr.length) && (p2<arr2.length)) {
    if(arr[p1]==arr2[p2]){
        console.log(`common:${arr[p1]}`);
        p1++;
        p2++;
    }
    else if(arr[p1]<arr2[p2]){
        p1++;
    }
    else if(arr[p1]>arr2[p2]){
        p2++;
    }
    count++;
}
console.log(count);