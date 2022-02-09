/*
Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in O(n) time.

Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

*/

var longestConsecutive = function(nums) {
  if (nums == null || nums.length === 0) return 0;
  const set = new Set(nums);
  let longest = 0;
  for (let num of nums) {
    if (!set.has(num - 1)) {
      let count = 0;
      while (set.has(count+num)) {
        count++;
      }
      longest = Math.max(longest,count);
    }
  }
  return longest;
};