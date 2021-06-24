const fs = require("fs");

function main() {
  const fileContent = fs.readFileSync("input.txt", "utf8"),
        nums = fileContent.toString().match(/.+$/gm);
  let a = +nums[0] || 0,
      b = +nums[1] || 0,
      c = +nums[2] || 0,
      result  = '';

  if (c < 0 || (a == 0 && c ** 2 != b)) {
    result = "NO SOLUTION";
  } else if((a == 0 && b == c ** 2) || (a == 0 && b == 0 && c == 0)) {
    result = "MANY SOLUTIONS";
  } else {
    let calc = (c ** 2 - b) / a
    result = Number.isInteger(calc) ? calc : "NO SOLUTION";
  }
  
  fs.writeFileSync("output.txt", result.toString())
}

main()
