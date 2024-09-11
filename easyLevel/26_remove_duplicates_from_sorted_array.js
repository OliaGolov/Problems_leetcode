
var removeDuplicates = function(nums) {
  let uniqueIndex = 1

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i-1]) {
      nums[uniqueIndex] = nums[i]
      uniqueIndex++
    }
  }
  return [uniqueIndex, nums]
  
};
console.log(removeDuplicates([0,0,0,0,1,1,1,2]));
