const fs = require("fs");

function main() {
  const fileContent = fs.readFileSync("input.txt", "utf8"),
        [n, ...param] = fileContent.toString().match(/\d+/g);

  let result = 0,
      pos_cache = new Set()

  for (let i = 0; i < param.length - 1; i += 2) {
    let a = param[i],
        b = param[i + 1],
        pos_head = n - a - 1,
        pos_tail = Number(b);
    
    if (pos_head == pos_tail) {
      if (!pos_cache.has(pos_head)) {
        result++;
        pos_cache.add(pos_head)
      }
    }
  }

  fs.writeFileSync("output.txt", result.toString())
}

main()
