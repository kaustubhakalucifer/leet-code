/**
 * Problem: Given an array of integers nums and an integer target, 
 * return indices of the two numbers such that they add up to target.
 * You may assume that each input would have exactly one solution, 
 * and you may not use the same element twice.You can return the answer
 * in any order.
 */

function twoSum(nums: number[], target: number): number[] {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = 1; j < nums.length; j++) {
      if ((nums[i] + nums[j] == target) && (i != j)) {
        return [i, j];
      }
    }
  }
  return [];
}

console.log(twoSum([2, 5, 5, 11], 10));