var sum=7;
var arr=[2,3,4,5]
var flag;


                                        // for(let i=0;i<arr.length;i++){
                                        //     for(let j=i+1;j<arr.length;j++){
                                        //         if(arr[i]+arr[j]==sum)
                                        //         console.log(arr[i],arr[j]);
                                        //     }
                                        // }

// simple method
arr.sort((n1,n2)=>n1-n2)
var low=0,upp=arr.length-1;

while(low<upp){
    currentsum=arr[low]+arr[upp];
    if(currentsum==sum){
        console.log(`pairs (${arr[low]},${arr[upp]})`);
        // flag=1;
        break;
    }
    else if(currentsum<sum){
        low++;
    }
    else if(currentsum>sum){
        upp--;
    }
}
if (flag==0){
    console.log("no pairs found");
}
// console.log(flag==0?"no matches":low,upp);