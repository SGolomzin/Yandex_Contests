const fs = require("fs");

function main() {
  const fileContent = fs.readFileSync("input.txt", "utf8"),
        [arr1, arr2] = fileContent.toString().match(/.+$/gm).map(str => str.split(' ')),
        set = new Set(arr1),
        result = [];
  
  arr2.forEach(el => set.has(el) ? result.push(el) : el)
  
  fs.writeFileSync("output.txt", result.sort((a,b)=> a - b).join(' '))
}

main()
