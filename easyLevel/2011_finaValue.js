const arr = ["--X","X++","X++"]

function finalValue(arr) {
   return arr.reduce((acc, item) => {
        if (item.includes('--')) {
            acc = acc - 1
        }
        else {acc = acc + 1}
        return acc
   }, 0)   
}

console.log(finalValue(arr));

// function finalValue(arr) {
//     let final = 0
//     for (let i=0; i<=arr.length -1; i++) {
//         if (arr[i].includes("--") === true) {
//         final = final - 1; 
//         }
//         else {final = final + 1}
//     } 
// return final
// }

// finalValue(arr)