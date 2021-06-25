const fs = require("fs");

function main() {
  const fileContent = fs.readFileSync("input.txt", "utf8");
  let [n, nums, target] = fileContent.toString().match(/.+$/gm),
      // индекс ближайшей позиции к числу
      pos = 0;

  [n, nums, target] = [+n, nums.split(' ').map(el => Number(el)), +target];      

  for(let i = 0; i < n && (target - nums[pos] !== 0); i++) {
    if(Math.abs(target - nums[i]) < Math.abs(target - nums[pos])) {
      pos = i;
    }
  }
  
  fs.writeFileSync("output.txt", nums[pos].toString())
}

main()
