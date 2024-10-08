var romanToInt = function (s) {

        const symbol = {
            'I': 1,
            'V': 5,
            'X': 10,
            'L': 50,
            'C': 100,
            'D': 500,
            'M': 1000
        }
        
    let result = 0;

    for (let i = 0; i < s.length; i++) {
        const cur = symbol[s[i]];
        const next = symbol[s[i+1]];
        if(cur < next) {
            result += next - cur;
            i++;
        } else {
            console.log(s[i], s[i+1]);
            result += cur;
        }
    }

    return result;
}

console.log(romanToInt('MCMXCIV'));
