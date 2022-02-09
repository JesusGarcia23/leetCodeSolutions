// Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

// There is only one repeated number in nums, return this repeated number.

// You must solve the problem without modifying the array nums and uses only constant extra space.

var findDuplicate = function(nums) {
    let mySet1 = new Set()
    for(let i = 0; i <= nums.length - 1; i++) {
      if (mySet1.has(nums[i])) {
        return nums[i];
      }
      mySet1.add(nums[i]);
    }
};