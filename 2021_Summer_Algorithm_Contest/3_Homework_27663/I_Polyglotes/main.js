const fs = require("fs");

function main() {
  const fileContent = fs.readFileSync("input.txt", "utf8"),
        [n, ...param] = fileContent.toString().match(/\S+/gi);

  let langs = {}
  
  for (let i = 0; i < param.length; i++) {
    let isLangName = Number.isNaN(parseInt(param[i]))
    if (isLangName) {
      langs[param[i]] = langs[param[i]] ? ++langs[param[i]] : 1 ;
    }
  }
  
  let knownByAll = []
  
  for (let [lang, entry] of Object.entries(langs)) {
    if (entry == n) {
      knownByAll.push(lang)
    }
  }
  
  fs.writeFileSync("output.txt", [knownByAll.length, ...knownByAll, Object.keys(langs).length, ...Object.keys(langs)].join('\n'))
}

main()
