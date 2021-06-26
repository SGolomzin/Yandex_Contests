const fs = require("fs");

function main() {
  const fileContent = fs.readFileSync("input.txt", "utf8"),
        [] = fileContent.toString().match(/.+$/gm),
        result
  
  fs.writeFileSync("output.txt", result)
}

main()
