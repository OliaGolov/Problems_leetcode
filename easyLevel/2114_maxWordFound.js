

let sentences = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"]
let maxSpaces = 0

 let max = sentences.map(item => {
     let countSpaces = item.split(' ').length
     if (maxSpaces <= countSpaces) {
         maxSpaces = countSpaces
     }
     else {
         maxSpaces = maxSpaces;
     };
     return maxSpaces
 });
 console.log(maxSpaces)