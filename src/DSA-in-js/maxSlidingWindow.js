// Ques : Sliding Window Maximum
// You are given an array of integers nums, there is a sliding window of size k which is
// moving from the very left of the array to the very right.You can only see the k numbers
// in the window. Each time the sliding window moves right by one position. For each window,
// take the maximum element and add them to a final result array.

// Input: nums = [1, 3, -1, -3, 5, 3, 6, 7], k = 3
// Output: [3, 3, 5, 5, 6, 7]

const maximumSlidingWindow = function (nums, k) {
  //   let results = [];

  //   for (let i = 0; i <= nums.length - k; i++) {
  //     let max = nums[i];
  //     for (let j = 1; j < k; j++) {
  //       if (nums[i + j] > max) max = nums[i + j];
  //     }
  //     results.push(max);
  //   }
  //   return results;

  let results = [],
    dequeue = [];

  for (let i = 0; i < nums.length; i++) {
    if (dequeue.length > 0 && dequeue[0] <= i - k) {
      dequeue.shift();
    }
    while (dequeue.length > 0 && nums[dequeue[dequeue.length - 1]] < nums[i])
      dequeue.pop();
    dequeue.push(i);

    if (i >= k - 1) results.push(nums[dequeue[0]]);
  }
  return results;
};

console.log(maximumSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7]), 3);
