function parenthesisCheck(string) {
    while (
        string.indexOf('()') != -1 ||
        string.indexOf('{}') != -1 ||
        string.indexOf('[]') != -1
    ) {
        string = string.replace('()', '').replace('{}', '').replace('[]', '')
    }
    return !string.length
}
console.log(parenthesisCheck('([}])'));