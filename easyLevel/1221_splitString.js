let s = "RLRRRLLRLL"
let arr = s.split('')
let answer = 0
let l = 0

for ( i of arr) {
    if (i == 'L') {
        ++l;
    } else {
        --l
    }
    if (l == 0)
    ++answer
}
