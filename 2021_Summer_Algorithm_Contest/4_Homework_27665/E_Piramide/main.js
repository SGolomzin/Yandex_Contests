const fs = require("fs");

function main() {
  const fileContent = fs.readFileSync("input.txt", "utf8");
  let [n, ...rest] = fileContent.toString().match(/.+$/gm),
      piramide = {},
      result = 0;

  rest = rest.map(str => str.split(' ').map(num => Number(num)))

  for (let i = 0; i < n; i++) {
    let [width, height] = rest[i];

    if (piramide[width] === undefined) {
      piramide[width] = height;
    } else {
      piramide[width] = piramide[width] < height ? height : piramide[width]
    }
  }

  result = [...Object.values(piramide)].reduce((acc, height) => acc + height, 0)

  fs.writeFileSync("output.txt", result.toString())
}

main()
