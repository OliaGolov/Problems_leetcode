const s = "["
let newArr = []
const arr =Array.from(s)

function closingBracket(closing) {
    if (closing == ')') {
        return '('
    }
    if (closing == '}') {
        return '{'
    }
    if (closing == ']') {
        return '['
    }   
}

for (i=0; i < arr.length; i++) {
    if (arr[i] == '(' || arr[i] == '[' || arr[i] == '{') {
        newArr.push(arr[i]);
    }
    else { 
        if (closingBracket(arr[i]) == newArr[newArr.length-1]) {
        newArr.pop()
        }
        else {
            console.log(false);
            newArr.push(arr[i])
            break;
        }    
    }
}

if (newArr.length == 0) {
        console.log(true);
    }
else {
    console.log(false);
}
    