let command = "G()()()()(al)"

let arr = command.split('')
let output = ''

let finalWord = arr.map((item, index, elements) => {
    if (item === '(') {
        let nextElem = elements[index + 1]
        if (nextElem === ')') {
            return (output += 'o')
        }
        return ''
    }
    else if (item === ')') {
        return ''
    }
    else {return (output += item)}
})
console.log(output);