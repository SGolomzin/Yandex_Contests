const fs = require("fs");

function main() {
  const fileContent = fs.readFileSync("input.txt", "utf8");
  let [size, nums] = fileContent.toString().match(/.+$/gm);
      
  size = Number(size);
  nums = nums.split(' ').map(el => Number(el));
  
  // return -1 if nums is symmetrical
  function asymPos(nums, size){
    let pos = -1;
    for (let i = 0; i < Math.floor(size / 2); i++) {
      if (nums[i] !== nums[size - i - 1]) {
        pos = i
        break;
      }
    }
    return pos;
  }
  
  let counter = 1,
      result;
  
  if (asymPos(nums, size) === -1) {
    result = 0;
  } else {
    let tmp = [nums[0]]
    for (let i = 1; i < size; i++) {
      let test = asymPos(nums.concat(...tmp), size + i);
      if (test == -1) break;
      tmp.unshift(nums[i])
      counter++
    }
    result = counter + '\r\n' + tmp.join(' ')
  }
  
  fs.writeFileSync("output.txt", result.toString())
}

main()
