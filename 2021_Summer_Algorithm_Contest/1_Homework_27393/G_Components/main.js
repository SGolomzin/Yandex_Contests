const fs = require("fs");

function main() {
  const fileContent = fs.readFileSync("input.txt", "utf8");
  let [n, k, m] = fileContent.toString().match(/\d+/g).map(el => Number(el)),
    maxK, maxM, restN, restK, details = 0;

  while(n >= k) {
    maxK = parseInt(n / k)
    maxM = parseInt(k / m)
    if (!maxM) break;
    restN = n % k
    restK = k % m
    details += maxK * maxM
    n = restN + (restK * maxK)
  }
  
  fs.writeFileSync("output.txt", details.toString())
}

main()
