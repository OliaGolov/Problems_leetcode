var searchInsert = function (nums, target) {
    let min = 0
    let max = nums.length -1
    while(min <= max) {
        //  console.log(nums[middle]);
        let middle = Math.floor(max - min / 2)
        if(nums[middle] == target) {
            return middle
        } else if(nums[middle] > target) {
            max = middle - 1
        } else if(nums[middle] < target) {
            min = middle + 1
        }
    }
    return min
} 
console.log(searchInsert([1,2,5,6,7], 8)); 
