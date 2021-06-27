const fs = require("fs");

function main() {
  const fileContent = fs.readFileSync("input.txt", "utf8");
  let [n, ...rest] = fileContent.toString().match(/.+$/gm),
      target = rest[rest.length - 1],
      dict = new Map();

  for (let i = 0; i < n; i++) {
    let [elem_1, elem_2] = rest[i].split(' ');

    dict.set(elem_1, elem_2)
    dict.set(elem_2, elem_1)
  }

  fs.writeFileSync("output.txt", dict.get(target))
}

main()
