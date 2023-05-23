function threeSum(nums: number[]): number[][] {
  nums.sort((a, b) => a - b);
  const triplets: number[][] = [];
  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] != nums[i - 1]) {
      let left = i + 1
      let right = nums.length - 1;
      while (left < right) {
        const currentSum = nums[i] + nums[left] + nums[right];
        if (currentSum === 0) {
          triplets.push([nums[i], nums[left], nums[right]]);
          while (nums[left] == nums[left + 1]) left++;
          while (nums[right] == nums[right - 1]) right--;
          left++;
          right--;
        } else if (currentSum < 0) {
          left++;
        } else if (currentSum > 0) {
          right--;
        }
      }
    }
  }
  return triplets;
};

console.log(threeSum([-11,-3,-6,12,-15,-13,-7,-3,13,-2,-10,3,12,-12,6,-6,12,9,-2,-12,14,11,-4,11,-8,8,0,-12,4,-5,10,8,7,11,-3,7,5,-3,-11,3,11,-13,14,8,12,5,-12,10,-8,-7,5,-9,-11,-14,9,-12,1,-6,-8,-10,4,9,6,-3,-3,-12,11,9,1,8,-10,-3,2,-11,-10,-1,1,-15,-6,8,-7,6,6,-10,7,0,-7,-7,9,-8,-9,-9,-14,12,-5,-10,-15,-9,-15,-7,6,-10,5,-7,-14,3,8,2,3,9,-12,4,1,9,1,-15,-13,9,-14,11,9]));