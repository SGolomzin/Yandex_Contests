const fs = require("fs");

function main() {
  const fileContent = fs.readFileSync("input.txt", "utf8"),
        [x, y, z, n] = fileContent.toString().match(/\d+/g);

  let regexp = new RegExp(`${x}|${y}|${z}`, 'g'),
      set = new Set(n.replace(regexp, ''));
      
  fs.writeFileSync("output.txt", set.size.toString())
}

main()
