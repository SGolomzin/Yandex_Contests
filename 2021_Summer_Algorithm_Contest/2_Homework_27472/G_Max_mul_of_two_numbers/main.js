const fs = require("fs");

function main() {
  const fileContent = fs.readFileSync("input.txt", "utf8"),
        nums = fileContent.toString().split(' ').map(el => Number(el));

  let max1 = nums[0] > nums[1] ? 0 : 1,
      max2 = nums[0] <= nums[1] ? 0 : 1,
      min1 = max2,
      min2 = max1;

  for (let i = 2; i < nums.length; i++) {
    if (nums[i] > nums[max1]) {
      max2 = max1
      max1 = i
    } else if (nums[i] > nums[max2]) {
      max2 = i
    } else if (nums[i] < 0 && nums[i] < nums[min1]) {
      min2 = min1
      min1 = i
    } else if (nums[i] < 0 && nums[i] < nums[min2]){
      min2 = i
    } 
  }
  
  let maxMul = nums[max1] * nums[max2],
      minMul = nums[min1] * nums[min2],
      result;

  result = maxMul > minMul ? `${nums[max2]} ${nums[max1]}` : `${nums[min1]} ${nums[min2]}`;

  fs.writeFileSync("output.txt", result.toString())
}

main()
