var strStr = function(haystack, needle) {
    if(!needle.length) return -1

    for (let i = 0; i < haystack.length; i++) {
        let k = i;
        let j = 0;
        while (haystack[k] == needle[j] && j < needle.length) {
            console.log(j);
            j++;
            k++;
        }
        if(needle.length == j) return i
    }
    return -1
};
console.log(strStr('hello', 'll')); //
