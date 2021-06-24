const fs = require("fs");

function main() {
  const fileContent = fs.readFileSync("input.txt", "utf8"),
        [temps, opt] = fileContent.toString().match(/.+$/gm),
        temp1 = Number(temps.split(' ')[0]),
        temp2 = Number(temps.split(' ')[1]),
        ACTIONS = {
          freeze: () => temp1 <= temp2 ? temp1 : temp2,
          heat: () => temp1 >= temp2 ? temp1 : temp2,
          auto: () => temp2,
          fan: () => temp1
        };
  
  fs.writeFileSync("output.txt", ACTIONS[opt]().toString())
}

main()
