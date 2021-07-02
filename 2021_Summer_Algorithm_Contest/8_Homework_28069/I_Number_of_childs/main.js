const fs = require("fs");

function main() {
  const fileContent = fs.readFileSync("input.txt", "utf8");
  let [n, ...input] = fileContent.toString().match(/.+$/gm);

  n = Number(n)
  input = input.map(str => str.split(' '))

  function createTree(n) {
    let tree = Array(n)
    for (let i = 0; i < n; i++) {
      // [ключ, ссылки на детей]
      tree[i] = [null, []]
    } 
    return [tree, 0]
  }

  function findIndex(tree, target) {
    for (let i = 0; i < tree[0].length; i++) {
      if (tree[0][i][0] === target) {
        return i
      }
    }
    return -1
  }

  function add(tree, child, parent) {
    let next = tree[1],
        nodes = tree[0];
    if (findIndex(tree, parent) === -1) {
      nodes[next][0] = parent;
      nodes[next][1].push(child)
      next = ++tree[1];
    } else {
      nodes[findIndex(tree, parent)][1].push(child)
    }

    if (findIndex(tree, child) === -1) {
      nodes[next][0] = child
      next = ++tree[1];
    }
  }

  let tree = createTree(n)

  for (let [child, parent] of input) {
    add(tree, child, parent)
  }

  let result = tree[0].sort(([name1, childs1], [name2, childs2]) => name1 > name2 ? 1 : -1)
                      .map(([key, childs]) => [key, childs.length])

  console.log(result);

  // fs.writeFileSync("output.txt", result.toString())
}

main()