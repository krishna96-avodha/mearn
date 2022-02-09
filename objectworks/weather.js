var data=[
    {districtname:"thrissur",weather:29},
    {districtname:"ekm",weather:32},
    {districtname:"ktm",weather:29},
    {districtname:"idk",weather:18},
    {districtname:"thrissur",weather:32},
    {districtname:"ekm",weather:30},
    {districtname:"ktm",weather:30},
    {districtname:"idk",weather:20},
    

]
var weatherOut={}
for(let ob of data){
    let districtName=ob["districtname"]
    let curTemp=ob["weather"]
    if(districtName in weatherOut){
        let oldTemp=weatherOut[districtName]
        if(oldTemp<curTemp){
            weatherOut[districtName]=curTemp
        }

    }
    else{
        weatherOut[districtName]=curTemp
    }

}
console.log(weatherOut);
console.log( Object.entries(weatherOut).sort((r1,r2)=>r1[1]-r2[1]));

