const fs = require("fs");

function main() {
  const fileContent = fs.readFileSync("input.txt", "utf8");
  let [n, c, k, p] = fileContent.toString().match(/.+$/gm);

  n = Number(n)
  k = Number(k)
  c = c.split(' ').map(num => Number(num));
  p = p.split(' ').map(num => Number(num));

  let keyboard = c.reduce((acc, num, i) => {
    acc[i + 1] = num;
    return acc
  }, {})

  for (let num of p) {
    keyboard[num]--
  }

  let result = []

  for (let i = 1; i <= n; i++) {
    result.push(keyboard[i] >= 0 ? 'NO' : 'YES')
  }
  
  fs.writeFileSync("output.txt", result.join('\n'))
}

main()
