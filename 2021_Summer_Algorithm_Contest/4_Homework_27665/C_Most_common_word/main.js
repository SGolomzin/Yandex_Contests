const fs = require("fs");

function main() {
  const fileContent = fs.readFileSync("input.txt", "utf8");
  let text = fileContent.toString().match(/\S+/g),
      counter = {},
      mostly_seen = 0,
      result = '',
      checkMostlySeen = n => mostly_seen < n ? mostly_seen = n : undefined;

  if (!text) text = []
  for (let i = 0; i < text.length; i++) {
    if (counter[text[i]] !== undefined) {
      checkMostlySeen(++counter[text[i]])
    } else {
      counter[text[i]] = 1
      checkMostlySeen(counter[text[i]])
    }
  }
  if (mostly_seen) {
    result = Object.entries(counter)
                   .filter(([name, c]) => c === mostly_seen)
                   .sort(([name1, c1], [name2, c2]) => name1 > name2 ? 1 : -1)[0][0]
  }
  
  fs.writeFileSync("output.txt", result)
}

main()
