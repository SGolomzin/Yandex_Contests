const fs = require("fs");

function main() {
  const fileContent = fs.readFileSync("input.txt", "utf8"),
        [a, b, n, m] = fileContent.toString().match(/.+$/gm).map(el => Number(el)),
        minPath1 = n + (n - 1) * a,
        minPath2 = m + (m - 1) * b,
        maxPath1 = n + (n + 1) * a,
        maxPath2 = m + (m + 1) * b;

  let result = ''

  if(maxPath1 < minPath2 || maxPath2 < minPath1) {
    result = -1;
  } else {
    result = [Math.max(minPath1, minPath2), Math.min(maxPath1, maxPath2)].join(' ')
  }
  
  fs.writeFileSync("output.txt", result.toString())
}

main()
