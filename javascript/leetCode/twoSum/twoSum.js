twoSums(mySums, myTarget);

        function twoSum(nums, target) {
  const numIndicesMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    const completment = target - nums[i];
    if (numIndicesMap.has(completment)) {
      return [numIndicesMap.get(completment), i];
    }
    numIndicesMap.set(nums[i], i);
  }

  throw new Error('No solution found');
}
