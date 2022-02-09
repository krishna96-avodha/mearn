var pttrn="ABBABBC"
// FIND FIRST RECURSIVE CHARECTER
var wc={}
for(let char of pttrn){
        if(char in wc){
            console.log(`${char} is the first recursive charecter`);
            break
        }
        else{
            wc[char]=1
        }
    }
