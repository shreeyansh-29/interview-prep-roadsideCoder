// Ques 2 - Rotate Array by K
// Given an integer array nums, rotate the array to the right by k steps,
// where k is non - negative.

// Input: nums = [1,2,3,4,5,6,7], k = 3  ----->>>>>  Output: [5,6,7,1,2,3,4]
// Input: nums = [-1,-100,3,99], k = 2   ----->>>>>  Output: [3,99,-1,-100]

function revereArray(nums, left, right) {
  while (left++ < right--) {
    const temp = nums[left];
    nums[left] = nums[right];
    nums[right] = temp;
  }
}

function rotateArray(nums, k) {
  //   let n = nums.length;
  //   k = k % n;

  //   let rotated = nums.splice(n - k, n);
  //   nums.unshift(...rotated);
  //   return nums;

  let n = nums.length;
  k = k % n;

  revereArray(nums, 0, n - 1);
  revereArray(nums, 0, k - 1);
  revereArray(nums, k, n - 1);
  return nums;
}

console.log(rotateArray([1, 2, 3, 4, 5, 6, 7], 2));
