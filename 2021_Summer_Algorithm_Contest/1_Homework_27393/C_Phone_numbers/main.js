const fs = require("fs");

function main() {
  const fileContent = fs.readFileSync("input.txt", "utf8");
  let [input, ...phoneBook] = fileContent.toString().match(/.+$/gm),
      result = [];

  function convert(str) {
    str = str.replace("+7", "8").replace(/\-|\(|\)/g, "");
    if (str.length === 7) {
      str = "8495" + str;
    }
    return str;
  }
  input = convert(input)

  for (let phone of phoneBook) {
    if (input === convert(phone)) {
      result.push("YES");
    } else {
      result.push("NO");
    }
  }
  
  fs.writeFileSync("output.txt", result.join("\n"))
}

main()
