
var twoSum = function(nums, target) {
   
    let mapOfNumbers = new Map();
    
    for (let i=0; i<nums.length; i++) {
        let complement = target - nums[i];

        if (mapOfNumbers.has(complement)) {
            return [mapOfNumbers.get(complement), i]
        }

        mapOfNumbers.set(nums[i], i)
    }
}

console.log(twoSum([1,3,7,11,14], 10))