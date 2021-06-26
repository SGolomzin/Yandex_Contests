const fs = require("fs");

function main() {
  const fileContent = fs.readFileSync("input.txt", "utf8"),
        arr = fileContent.toString().split(' ').map(el => Number(el));
  
  let result = 0

  for (let i = 1; i < arr.length - 1; i++) {
    if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
      result++
      // если условие выполнено, то мы можем с уверенностью утверждать что следующий
      // i-ый элемент будет иметь соседа слева больше чем он сам
      i++
    }
  }
        
  fs.writeFileSync("output.txt", result.toString())
}

main()
