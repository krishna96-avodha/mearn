function StartWithA(name){
    return name[0]=='A' || name[0]=='a'?'START WITH A':'NOT START WITH A'
}
//  console.log(StartWithA('Akhil'));
// endsWith
var isStartWithA=name=> name[0]=="a"?true:false
console.log(isStartWithA('nikhil'));