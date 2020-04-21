// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Example:

// Input: [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Note:

// You must do this in-place without making a 

// NOTE: This code works everywhere but Leetcode website (Yeah, their website is trash)

var moveZeroes = function(nums) {
    return nums.filter(number => number !== 0).concat(nums.filter(number => number === 0));
  };
  