const fs = require("fs");

function main() {
  const fileContent = fs.readFileSync("input.txt", "utf8");
  let text = fileContent.toString().match(/\S+/g),
      repeats = {},
      result = [];
  
  if (!text) text = [];
  for (let i = 0; i < text.length; i++) {
    if (repeats[text[i]] !== undefined) {
      result.push(repeats[text[i]])
      repeats[text[i]]++
    } else {
      result.push(0);
      repeats[text[i]] = 1
    }
  }

  fs.writeFileSync("output.txt", result.join(' '))
}

main()
