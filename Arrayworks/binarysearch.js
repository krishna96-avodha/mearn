var arr=[2,3,6,9,12,15,25,18]
var low=0,upp=arr.length-1;
var count=1;
var flag=0;
var element=3;
while (low<=upp) {
    let mid=Math.floor((low+upp)/2)
    // case1
    if(element>arr[mid]){
        low=mid+1;
    }
    // case2
    else if(element<arr[mid]){
        upp=mid-1;
    }
    // case3
    else if(element==arr[mid]){
        flag=1;
        break;
    }
    count++;
}
console.log(count);
console.log(flag==0?"element not found":"element found");