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

    static depth(node) {
      let depth = 0;

      if (node.left === null && node.right === null) {
        depth += 1
      }

      if (node.left !== null) {
        depth = 1 + BSTnode.depth(node.left)
      }

      if (node.right !== null) {
        depth = 1 + BSTnode.depth(node.right)
      }
      
      return depth
    }

    static checkBalance(node) {
      let leftDepth = node.left ? BSTnode.depth(node.left) : 0 ,
          rightDepth = node.right ? BSTnode.depth(node.right) : 0 ,
          absDepth = Math.abs(leftDepth - rightDepth),
          leftBalance = 1,
          rightBalance = 1;
          
      if (absDepth > 1) {
        return 0
      }

      if (node.left !== null) {
        leftBalance = BSTnode.checkBalance(node.left)
      }

      if (node.right !== null) {
        rightBalance = BSTnode.checkBalance(node.right)
      }

      return leftBalance && rightBalance
    }
  }

  let root = new BSTnode();
  
  for (let i = 0; i < input.length && input[i] != 0; i++) {
    root.insert(input[i])
  }

  fs.writeFileSync("output.txt", BSTnode.checkBalance(root) ? "YES" : "NO")
}

main()