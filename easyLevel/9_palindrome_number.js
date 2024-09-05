var isPalindrome = function (x) {
  let newNumber = x;
  let reverse = 0;

  while (newNumber > 0) {
    let digit = newNumber % 10;
    reverse = digit + reverse * 10;
    newNumber = parseInt(newNumber / 10);
  }

  if (reverse === x) {
    return true;
  }

  return false;
};
console.log(isPalindrome(1245421));
