// PW2.01.01 Two Sum
const nums = [2, 7, 11, 15];
let target = 9;

function twoSum(nums, target) {
  const map = new Map();
  // console.log(map);
  for (let i = 0; i < nums.length; i++) {
    let neededValue = target - nums[i];
    // console.log(neededValue)
    if (map.has(neededValue)) {
      // console.log([map.get(neededValue), i])
      return [map.get(neededValue), i];
    }
    map.set(nums[i], i);
  }
}
console.log(twoSum(nums, target));

// PW2.01.03 Remove Duplicates From Sorted Array
function removeDuplicates(nums) {
  if (nums.length === 0) return 0; // Base case: if the array is empty, return 0

  let k = 1; // Initialize the variable k to track the position of unique elements

  // Iterate through the array starting from the second element
  for (let i = 1; i < nums.length; i++) {
    // If the current element is different from the previous one,
    // update the array by assigning the current element to the position k
    if (nums[i] !== nums[i - 1]) {
      nums[k] = nums[i];
      k++; // Increment k to move to the next position for unique elements
    }
  }

  return k; // Return k which represents the number of unique elements
}
