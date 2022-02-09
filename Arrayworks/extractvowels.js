var string="hello hai"
// print all vowels
var vowels=['a','e','i','o','u','A','E','I','O','U']
// for(let char of string){
//     if(vowels.includes(char)){
//         console.log(char);
//     }
// }
Array.from(string).filter(char=>vowels.includes(char)).forEach(char=>console.log(char))