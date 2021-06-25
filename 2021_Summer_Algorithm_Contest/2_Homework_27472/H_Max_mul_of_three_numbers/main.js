const fs = require("fs");

function main() {
  const fileContent = fs.readFileSync("input.txt", "utf8"),
        nums = fileContent.toString().match(/[-]?\d+/gi).sort((a,b) => a - b),
        minNums = [],
        maxNums = [];
  
  let i = 0,
      result;

  while(minNums.length < 3 && i < nums.length) {
    minNums.push(nums[i]);
    i++
  }

  i = nums.length - 1;

  while(maxNums.length < 3 && i >= 0) {
    maxNums.push(nums[i])
    i--
  }

  minNums[2] = maxNums[0]

  result = maxNums.reduce((acc,el) => acc * el) >= minNums.reduce((acc,el) => acc * el) ? maxNums.sort((a,b)=> b - a) : minNums.sort((a,b)=> b - a);
  fs.writeFileSync("output.txt", result.join(' '))
}

main()
