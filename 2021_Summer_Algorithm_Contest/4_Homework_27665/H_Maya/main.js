const fs = require("fs");

function main() {
  const fileContent = fs.readFileSync("input.txt", "utf8");
  let [word_length, str_length, word, str] = fileContent.toString().match(/\S+/g);

  fs.writeFileSync("output.txt", result.toString())
}

main()
