const fs = require("fs");

function main() {
  const fileContent = fs.readFileSync("input.txt", "utf8");
  let [...text] = fileContent.toString().match(/\S+/gi),
      countWords = {};
  
  text = text ? text : '';

  for(let i = 0; i < text.length; i++) {
    countWords[text[i]] = countWords[text[i]] ? ++countWords[text[i]] : 1;
  }

  fs.writeFileSync("output.txt", Object.keys(countWords).length.toString())
}

main()
