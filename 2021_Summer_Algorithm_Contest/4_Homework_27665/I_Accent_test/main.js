const fs = require("fs");

function main() {
  const fileContent = fs.readFileSync("input.txt", "utf8");
  let [n, ...rest] = fileContent.toString().match(/.+$/gm),
      string = rest[n] ? rest[n].split(' ') : '',
      mistakes = 0;

      
  let dict = new Map();
  rest = rest.slice(0, n)

  for (let word of rest) {
    let lc = word.toLowerCase()
    if (dict.has(lc)) {
      dict.get(lc).push(word)
    } else {
      dict.set(lc, [ word ])
    }
  }

  // проверяем слово на 0 или более чем 1 ударение
  function wrongAccent(word) {
    let countUpper = 0;
    for (let char of word) {
      if (/[A-Z]/.test(char)) {
        countUpper++;
      }
    }
    return countUpper === 1 ? false : true 
  }

  function hasWord(dict, word) {
    let lc = word.toLowerCase(),
        correctWords = dict.get(lc),
        hasWord = false;

    if (correctWords) {
      for (let cword of correctWords) {
        hasWord = word === cword ? true : hasWord | false ;
      }
    }

    return hasWord
  }

  for (let word of string) {
    let lc = word.toLowerCase()
    if ((!dict.has(lc) && wrongAccent(word)) || (dict.has(lc) && !hasWord(dict, word))) {
      mistakes++
    }
  }

  fs.writeFileSync("output.txt", mistakes.toString())
}

main()
