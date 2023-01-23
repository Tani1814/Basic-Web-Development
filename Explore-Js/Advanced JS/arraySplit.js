const nums = [1, 2, 3, 4, 5, 6, 7, 8];
const part = nums.slice(2, 5);
console.log(part);
console.log(nums);

const remove = nums.splice(2, 4, 77, 44, 55);
//splice(starting index, how many value willbe remove, injecting values)
console.log(remove);
console.log(nums);

const together = nums.join(", joining ");
console.log(together);