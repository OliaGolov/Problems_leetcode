var lengthOfLastWord = function (s) {
  function deleteSpaces(s) {
    for (let i = s.length - 1; i >= 0; i--) {
      let str = "";
      while (s[i] != " ") {
        str = s.slice(0, i + 1);
        return str;
      }
    }
  }

  let trimmedStr = deleteSpaces(s);

  for (let j = trimmedStr.length - 1; j >= 0; j--) {
    if (trimmedStr[j] == " ") {
      trimmedStr = trimmedStr.slice(j + 1, trimmedStr.length);
    }
  }
  return trimmedStr.length;
};

console.log(lengthOfLastWord("moon"));
