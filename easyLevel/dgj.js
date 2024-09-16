var removeElement = function (nums, val) {
  let i = 0;
  let count = 0;

  while (i < nums.length) {
    if (nums[i] === val) {
      const a = nums.splice(i, 1)[0];
      nums.push(a)
    } else {
      i++;
    }
  }3

  return count;
};

// console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));
removeElement([0, 1, 2, 2, 2, 2, 3, 0, 4, 2], 1);
