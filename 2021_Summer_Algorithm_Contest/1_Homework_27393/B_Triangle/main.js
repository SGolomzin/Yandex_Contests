const fs = require("fs");

function main() {
  const fileContent = fs.readFileSync("input.txt", "utf8"),
        nums = fileContent.toString().match(/.+$/gm),
        a = +nums[0] || 0,
        b = +nums[1] || 0,
        c = +nums[2] || 0;

  let result = "NO";
        
  if ( a + b > c && b + c > a && c + a > b) {
    result = "YES";
  } 

  fs.writeFileSync("output.txt", result)
}

main()
