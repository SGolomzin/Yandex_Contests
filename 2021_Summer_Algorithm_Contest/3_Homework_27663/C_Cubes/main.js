const fs = require("fs");

function main() {
  const fileContent = fs.readFileSync("input.txt", "utf8"),
        [n, m, ...cubes] = fileContent.toString().match(/\S+/g);
  
  let setN = new Set(),
      setM = new Set(),
      union = new Set();
  for (let i = 0; i < Number(n); i++) {
    setN.add(cubes[i])
  }
  
  for (let i = n; i < (Number(n) + Number(m)); i++) {
    if (setN.has(cubes[i])) {
      setN.delete(cubes[i])
      union.add(cubes[i])
    } else {
      setM.add(cubes[i])
    }
  }
  
  function print(set) {
    return [...set.values()].sort((a, b) => a - b).join(' ');
  }
  
  fs.writeFileSync("output.txt", [union.size, print(union), setN.size, print(setN), setM.size, print(setM)].join('\n'))
}

main()
