const fs = require("fs");

function main() {
  const fileContent = fs.readFileSync("input.txt", "utf8"),
        [numOfParticipants, ...results] = fileContent.toString().match(/[-]?\d+/gi);

  let winner = Math.max(...results),
      target = [],
      result,
      hasWinnerBeforeTarget = false;
  
  for(let i = 1; i < numOfParticipants - 1; i++) {
    if(results[i - 1] == winner) hasWinnerBeforeTarget = true;
    if(results[i] % 10 == 5 && hasWinnerBeforeTarget && +results[i] > +results[i + 1]) {
      target.push(results[i])
    }
  }
  
  result = results.sort((a,b) => b - a).indexOf(Math.max(...target).toString()) + 1
  
  fs.writeFileSync("output.txt", result.toString())
}

main()
