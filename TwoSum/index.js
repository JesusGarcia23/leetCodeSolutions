// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Example:

// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

var twoSum = function(nums, target) {
    for(let i = 0; i < nums.length; i++) {
      if(nums[i] < target && nums.indexOf(target - nums[i]) >= 0){
         return [i, nums.indexOf(target - nums[i])];
      }else if(nums[i] > target && nums.indexOf(nums[i] - target) >= 0){
        return [i, nums.indexOf(target - nums[i])];
      }
    }
};

//supposing the array is in order
var twoSum = function(nums, target) {
    for(let i = 0; i < nums.length; i++) {
      if(nums.indexOf(target - nums[i]) >= 0 && nums.indexOf(target - nums[i]) !== i){
         return [i, nums.indexOf(target - nums[i])];
      }
    }
};