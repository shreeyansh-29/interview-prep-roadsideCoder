// Ques 4 - Given an integer array nums, find the subarray with the largest sum,
// and return its sum.

// Input: [-2,1,-3,4,-1,2,1,-5,4]     ----->>>>>    Output: 6,   [4,-1,2,1]
// Input: [5,4,-1,7,8]                ----->>>>>    Output: 23,  [5,4,-1,7,8]

function largestSumSubArray(nums) {
  //   let maxSum = nums[0];
  //   let startIdx = -1,
  //     endIdx = -1;
  //   for (let i = 0; i < nums.length; i++) {
  //     let sum = 0;
  //     for (let j = i; j < nums.length; j++) {
  //       sum = sum + nums[j];

  //       if (sum > maxSum) {
  //         maxSum = sum;
  //         startIdx = i;
  //         endIdx = j;
  //       }
  //     }
  //   }
  //   return {sum: maxSum, subArr: nums.splice(startIdx, endIdx + 1)};

  let maxSum = nums[0];
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];

    if (sum > maxSum) maxSum = sum;

    if (sum < 0) sum = 0;
  }
  return maxSum;
}

console.log(largestSumSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
