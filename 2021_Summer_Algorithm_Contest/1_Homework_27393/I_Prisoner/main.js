const fs = require("fs");

function main() {
  const fileContent = fs.readFileSync("input.txt", "utf8"),
        [a,b,c,d,e] = fileContent.toString().match(/.+$/gm).map(el => Number(el)),
        holeMinSide = Math.min(d, e),
        holeMaxSide = Math.max(d, e),
        [brMin1, brMin2] = [a, b, c].sort((a,b) => a - b);

  let result = 'NO'
  if (holeMinSide >= brMin1 && holeMaxSide >= brMin2) {
    result = 'YES'
  }
  
  fs.writeFileSync("output.txt", result.toString())
}

main()
