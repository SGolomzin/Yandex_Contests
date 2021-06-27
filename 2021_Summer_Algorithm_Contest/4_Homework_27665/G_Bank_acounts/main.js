const fs = require("fs");

function main() {
  let fileContent = fs.readFileSync("input.txt", "utf8");
      fc = fileContent.toString().match(/.+/gm).map(el => el.split(' ')),
      result = [];

  const CLIENTS = new Map()

  const OPTIONS = {
    'DEPOSIT': (name, sum) => {
      if(CLIENTS.has(name)) {
        CLIENTS.set(name, Number(CLIENTS.get(name)) + Number(sum))
      } else {
        CLIENTS.set(name, sum)
      }
    },
    'WITHDRAW': (name, sum) => {
      if(CLIENTS.has(name)) {
        CLIENTS.set(name, Number(CLIENTS.get(name)) - Number(sum))
      } else {
        CLIENTS.set(name, -Number(sum))
      }
    },
    'BALANCE': name => {
      if(CLIENTS.has(name)) {
        result.push(CLIENTS.get(name))
      } else {
        result.push('ERROR')
      }
    },
    'TRANSFER': (from, to, sum) => {
      if(!CLIENTS.has(from)) { CLIENTS.set(from, 0) }
      if(!CLIENTS.has(to)) { CLIENTS.set(to, 0) }

      CLIENTS.set(from, Number(CLIENTS.get(from)) - Number(sum))
      CLIENTS.set(to, Number(CLIENTS.get(to)) + Number(sum))
    },
    'INCOME': p => {
      CLIENTS.forEach((value, key )=> {
        if(Number(value) > 0) {
          CLIENTS.set(key, Number(value) + parseInt(Number(value) / 100 * p))
        }
      })
    }
  }

  for(let currentLine = 0; currentLine < fc.length; currentLine++) {
    let command = fc[currentLine][0]
    OPTIONS[command](fc[currentLine][1], fc[currentLine][2], fc[currentLine][3])
  }

  fs.writeFileSync("output.txt", result.join('\n'))
}

main()
