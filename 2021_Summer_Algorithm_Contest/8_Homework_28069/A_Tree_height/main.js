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
      }

      if (this.val > value) {
        this.left === null ? this.left = new BSTnode(value) : this.left.insert(value) ;
      }

      if (this.val < value) {
        this.right === null ? this.right = new BSTnode(value) : this.right.insert(value) ;
      }
    }

    static maxDepth(root) {
      let maxDepth = 0
      if (root === null) return maxDepth;

      return maxDepth = 1 + Math.max(BSTnode.maxDepth(root.left), BSTnode.maxDepth(root.right))
    }
  }

  let root = new BSTnode()

  for (let i = 0; i < input.length && input[i] != 0; i++) {
    root.insert(input[i])
  }
  
  fs.writeFileSync("output.txt", BSTnode.maxDepth(root).toString())
}

main()