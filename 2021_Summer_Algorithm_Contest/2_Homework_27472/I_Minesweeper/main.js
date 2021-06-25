const fs = require("fs");

function main() {
  const fileContent = fs.readFileSync("input.txt", "utf8");
  let [opt, ...minesCoords] = fileContent.toString().match(/.+$/gm),
      field = [];

  [height, width, mines] = opt.split(' ').map(el => Number(el));
  minesCoords = minesCoords.map(coords => coords.split(' ').map(el => Number(el)));

  // Create field
  for(let i = 0; i < height; i++) {
    let line = Array(width);
    for(let j = 0; j < width; j++) {
      line[j] = 0
    }
    field.push(line)
  }
  
  function recountAround(field, n, m) {
    for(let i = n - 1; i <= n + 1; i++) {
      for(let j = m - 1; j <= m + 1; j++) {
        if(i >= 0 && i < height && j >= 0 && j < width && field[i][j] !== '*') {
          field[i][j]++
        }
      }
    }
  }
  
  // Place mines and recount cells around mine
  for(let i = 0; i < mines; i++) {
    let mineH = minesCoords[i][0],
        mineW = minesCoords[i][1];
    field[mineH - 1][mineW - 1] = '*';
    recountAround(field, mineH - 1, mineW - 1)
  }
  
  fs.writeFileSync("output.txt", field.map(line => line.join(' ')).join('\r\n').toString())
}

main()
