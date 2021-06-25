const fs = require("fs");

function main() {
  const fileContent = fs.readFileSync("input.txt", "utf8"),
        [a, b, c, d] = fileContent.toString().match(/.+$/gm)[0].split(' ').map(el => Number(el));

  let result = ''
  if(a == b && b == c && c == d){
    result = 2 * a + ' ' + a;
  } else {
    let areas = {}
  
    function hash(a, b, c, d) {
      let area = (a + c) * Math.max(b, d)
      if(!areas[area]) {
        areas[area] = [(a + c), Math.max(b, d)]
      }
    }
    hash(a, b, c, d);
    hash(a, b, d, c);
    hash(b, a, c, d);
    hash(b, a, d, c);
  
    let minArea = Math.min(...Object.keys(areas))
    result = areas[minArea].join(' ')
  }
  
  fs.writeFileSync("output.txt", result.toString())
}

main()
