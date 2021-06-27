const fs = require("fs");

function main() {
  const fileContent = fs.readFileSync("input.txt", "utf8");

  let data = fileContent.toString().match(/.+$/gm).map(str => str.split(' ')),
      customers = new Map()
  
  for (let [name, item, amount] of data) {
    amount = Number(amount)
    if (customers.has(name)) {
      let items = customers.get(name)
      if (items.has(item)) {
        let old_amount = items.get(item)
        items.set(item, old_amount + amount)
      } else {
        items.set(item, amount)
      }
    } else {
      let items = new Map()
      items.set(item, amount)
      customers.set(name, items)
    }
  }

  let customers_list = [...customers.keys()].sort()

  for(let i = 0; i < customers_list.length; i++) {
    let items_list = [...customers.get(customers_list[i]).keys()].sort()

    for (let j = 0; j < items_list.length; j++) {
      items_list[j] = `${items_list[j]} ${customers.get(customers_list[i]).get(items_list[j])}`
    }

    customers_list[i] = [`${customers_list[i]}:\n${items_list.join('\n')}`]
  }

  fs.writeFileSync("output.txt", customers_list.join('\n'))
}

main()
