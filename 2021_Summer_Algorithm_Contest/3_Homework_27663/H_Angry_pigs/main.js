const fs = require("fs");

function main() {
  const fileContent = fs.readFileSync("input.txt", "utf8"),
        [n, ...param] = fileContent.toString().match(/\d+/g);

  let pos_cache = new Set()
  
  for(let i = 0; i < param.length - 1; i += 2) {
    if(!pos_cache.has(param[i])) {
      pos_cache.add(param[i])
    }
  }
  
  fs.writeFileSync("output.txt", pos_cache.size.toString())
}

main()
