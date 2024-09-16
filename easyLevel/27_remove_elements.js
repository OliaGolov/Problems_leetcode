var removeElement = function (nums, val) {
  
    let uniqueIndex = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
        nums[uniqueIndex] = nums[i]
        uniqueIndex++
    }
    console.log(nums);
  }

  return nums;
};
console.log(removeElement([0,1,2,2,3,0,4], 2)); //
