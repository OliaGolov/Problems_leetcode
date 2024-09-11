function checkParenthesis(s) {
    let newS = []

    for(let letter  = 0; letter < s.length; letter++) {
        if (s[letter] == '{') {
            newS.push('}')
        }
        else if (s[letter] == '(') {
            newS.push(')')
        }
        else if (s[letter] == '[') {
            newS.push(']')
        }
        else if (newS.pop() != s[letter]) {
            return false
        }
    }

    return !newS.length

}
console.log(checkParenthesis('[('))