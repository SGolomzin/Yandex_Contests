const fs = require("fs");

function main() {
  const fileContent = fs.readFileSync("input.txt", "utf8"),
        arr = fileContent.toString().split(' ').map(el => Number(el));

  let fl = true;
  
  for(let i = 0; i < arr.length - 1 && fl; i++) {
    if(arr[i] >= arr[i + 1]) {
        fs.writeFileSync("output.txt", "NO");
        fl = false;
    }
  }
  if(fl) fs.writeFileSync("output.txt", "YES")
}

main()
