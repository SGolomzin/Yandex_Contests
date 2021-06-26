const fs = require("fs");

function main() {
  const fileContent = fs.readFileSync("input.txt", "utf8"),
        set = new Set(fileContent.toString().match(/[-]?\d+/g))

  fs.writeFileSync("output.txt", set.size.toString())
}

main()
