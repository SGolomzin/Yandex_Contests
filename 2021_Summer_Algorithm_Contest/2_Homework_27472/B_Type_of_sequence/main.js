const fs = require("fs");

function main() {
  const fileContent = fs.readFileSync("input.txt", "utf8"),
        nums = fileContent.toString().match(/.+$/gm).map(el => Number(el)),
  // Каждое значение представляем специальной маской
        FL = {
          0: "CONSTANT",            // 000 пустой ввод или один эл-нт
          1: "DESCENDING",          // 001 строго возрастающая последовательность
          2: "ASCENDING",           // 010 строго убывающая последовательность
          3: "RANDOM",              // 011 
          4: "CONSTANT",            // 100 последовательность из равных эл-ов n > 1
          5: "WEAKLY DESCENDING",   // 101 убывающая последовательность
          6: "WEAKLY ASCENDING",    // 110 возрастающая последовательность
          7: "RANDOM"               // 111
        };

  let flag = 0;

  // Сравниваем 2 числа
  function compare(a, b) {
    // Числа равны значит CONST 100
    if(a === b) {
      return 4;
    // Первое число меньше --> ASC 010
    } else if(a < b) {
      return 2;
    // Второе число меньше --> DESC 001
    } else {
      return 1;
    }
  }

  // проходим по списку чисел пока не встретим число -2000000000 и пока флаг не окажется в состоянии 3 или 7
  for(let i = 0; i < nums.length - 1 && nums[i + 1] !== -2e+9 && (flag !== 3 || flag !== 7); i++) {
    // если сравнение возвращает новое состояние флага, то выполняем побитовое сложение
    flag = flag === compare(nums[i], nums[i + 1]) ? flag : flag | compare(nums[i], nums[i + 1]);
  }

  fs.writeFileSync("output.txt", FL[flag])
}

main()
