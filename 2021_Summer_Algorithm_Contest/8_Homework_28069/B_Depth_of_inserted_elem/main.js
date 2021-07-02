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

    static maxDepth(root) {
      let maxDepth = 0
      if (root === null) return maxDepth;

      return maxDepth = 1 + Math.max(BSTnode.maxDepth(root.left), BSTnode.maxDepth(root.right))
    }

    static findDepth(root, value) {
      let depth = 0;

      if (root.val === value) {
        depth += 1
      }

      if (root.val > value) {
        depth = 1 + BSTnode.findDepth(root.left, value)
      }

      if (root.val < value) {
        depth = 1 + BSTnode.findDepth(root.right, value)
      }
      
      return depth
    }
  }

  let root = new BSTnode(),
      result = []

  for (let i = 0; i < input.length && input[i] != 0; i++) {
    let inserted_node = root.insert(input[i])
    if (inserted_node) {
      result.push(BSTnode.findDepth(root, inserted_node.val))
    }
  }

  fs.writeFileSync("output.txt", result.join(' '))
}

main()