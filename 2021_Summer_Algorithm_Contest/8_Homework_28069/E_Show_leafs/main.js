const fs = require("fs");

function main() {
  const fileContent = fs.readFileSync("input.txt", "utf8"),
        input = fileContent.toString().match(/\S+/g).map(el => Number(el));

  class BSTnode {
    constructor(val, left, right) {
      this.val = (val === undefined ? 0 : val)
      this.left = (left === undefined ? null : left)
      this.right = (right === undefined ? null : right)
    }

    insert(value) {
      if (this.val === 0) {
        this.val = value
        return this
      }

      if (this.val > value) {
        return this.left === null ? this.left = new BSTnode(value) : this.left.insert(value) ;
      }

      if (this.val < value) {
        return this.right === null ? this.right = new BSTnode(value) : this.right.insert(value) ;
      }
    }

    static showLeafs(node) {
      let values = []

      if (node.left !== null) {
        values.push(...BSTnode.showLeafs(node.left))
      }
      if (node.left === null && node.right === null) {
        values.push(node.val)
      }

      if (node.right !== null) {
        values.push(...BSTnode.showLeafs(node.right))
      }

      return values
    }
  }

  let root = new BSTnode();
  
  for (let i = 0; i < input.length && input[i] != 0; i++) {
    root.insert(input[i])
  }

  fs.writeFileSync("output.txt", BSTnode.showLeafs(root).join('\n'))
}

main()