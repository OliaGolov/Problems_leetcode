var isValid = function(s) {
  let balance = []

    for (let i = 0; i < s.length; i++) {
      if(s[i] == '{') {
        balance.push('}')
      }
      else if(s[i] == '[') {
        balance.push(']')
      }
      else if(s[i] == '(') {
        balance.push(')')
      }
      else if (balance.pop() !== s[i]) {
          return false
      }
  }

  return !balance.length
}

 console.log(isValid('[['));

