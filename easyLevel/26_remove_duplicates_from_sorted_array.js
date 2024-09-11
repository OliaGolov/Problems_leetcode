var removeDuplicates = function(nums) {
    let current = nums[0]

    for (let i = 0; i < nums.length; i++) {
        if ( current == nums[i + 1]) {
            nums.splice(nums[i + 1], 1)
            i--
          } else {
            current = nums[i+1];
          }  
        }

    return nums
};
console.log(removeDuplicates([1,1,2]));
