const fs = require("fs");

function main() {
  const fileContent = fs.readFileSync("input.txt", "utf8");
  // построчно считваем входные данные
  let [opt, ...rest] = fileContent.toString().match(/.+$/gm),
      [n, c, d] = opt.split(' ');

  let regexp = new RegExp(`\\b${d === 'yes' ? '(\\d+)?' : '' }[_a-zA-Z]+[_a-zA-Z\\d]*\\b`, "gm")

  // сохраняем ключевые слова в словарь
  let dict = new Set()
  for (let i = 0; i < Number(n); i++) {
    let keyWord = c === 'no' ? rest[i].toLowerCase() : rest[i] ;
    dict.add(keyWord)
  }

  // сохраняем только строки кода
  let code = rest.slice(Number(n)),
  // создаем объект с используемыми идентификаторами
      used_id = {},
      max_occurs = 0;

  // функция записи нового id в used_id
  let takeId = function(str) {
    let all_id = str.match(regexp);
    all_id = all_id ? all_id : [] ;
    for (let id of all_id) {
      // проверка на чувствительность к регистру
      id = c === 'no' ? id.toLowerCase() : id ;
      if (!dict.has(id)) {
        used_id[id] = used_id[id] ? ++used_id[id] : 1 ;
        // проверяем счетчик
        max_occurs = max_occurs < used_id[id] ? used_id[id] : max_occurs;
      }
    }
  }
  
  for (let line of code) {
    takeId(line)
  }

  let filtered = Object.entries(used_id).filter(([id, counter]) => counter === max_occurs)

  let result = filtered[0] === undefined ? '' : filtered[0][0] ;
  
  fs.writeFileSync("output.txt", result.toString())
}

main()
