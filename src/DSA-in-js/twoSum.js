// Ques - 4 Two Sum

const twoSum = function (nums, target) {
  //   if (nums.length === 0) return [];

  //   for (let i = 0; i < nums.length; i++) {
  //     for (let j = i + 1; j < nums.length; j++) {
  //       if (nums[i] + nums[j] === target) return [i, j];
  //     }
  //   }
  //   return [];

  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    let n = nums[i];
    if (obj[target - n] >= 0) {
      return [obj[target - n], i];
    } else {
      obj[n] = i;
    }
  }
  return [];
};

const res = twoSum([2, 3, 4], 6);
console.log(res);
