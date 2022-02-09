var text="hello hai hello hai"
//op= hello=2,hai=2
//  first split text into words by using split(), split by space

// var words=text.split(" ") op-['hello','hai','helo','hai]
// // console.log(words);
 var wordCount={}
//  for(let word of words){
//      if(word in wordCount){
//          wordCount[word]+=1

//      }
//      else{
//          wordCount[word]=1

//      }
//  }
//  console.log(wordCount);

text.split(" ").map(word=>word in wordCount?wordCount[word]+=1:wordCount[word]=1)
console.log(wordCount);


