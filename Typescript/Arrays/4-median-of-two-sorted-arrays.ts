/**
 * Given two sorted arrays nums1 and nums2 of size m and n 
 * respectively, return the median of the two sorted arrays.
 * The overall run time complexity should be O(log (m+n)).
 */

function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  let mergedArray = [...nums1, ...nums2];
  mergedArray = mergedArray.sort((a: number, b: number) => {
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    return 0
  });
  if (mergedArray.length % 2 == 1) {
    return mergedArray.splice((mergedArray.length - 1) / 2, 1)[0];
  } else {
    return (mergedArray[(mergedArray.length / 2) - 1] + mergedArray[(mergedArray.length / 2)]) / 2;
  }
}

console.log(findMedianSortedArrays([3], [-2, -1]));