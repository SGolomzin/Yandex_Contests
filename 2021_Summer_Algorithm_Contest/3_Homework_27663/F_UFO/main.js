const fs = require("fs");

function main() {
  const fileContent = fs.readFileSync("input.txt", "utf8"),
        [gen1, gen2] = fileContent.toString().match(/\w+/g);

  let pairs = {},
      result = 0;
  
  for (let i = 0; i < gen1.length - 1; i++) {
    let pair = gen1[i] + gen1[i + 1]
    pairs[pair] = pairs[pair] ? ++pairs[pair] : 1 ;
  }

  for (let i = 0; i < gen2.length - 1; i++) {
    let pair = gen2[i] + gen2[i + 1]
    if (pairs[pair]) {
      result += pairs[pair];
      delete pairs[pair]
    }
  }

  fs.writeFileSync("output.txt", result.toString())
}

main()
