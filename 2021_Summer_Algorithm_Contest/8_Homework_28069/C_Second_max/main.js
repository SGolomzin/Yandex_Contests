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

    static secondMax(node) {
      let values = [],
          todoStack = [];

      // зашли в первый раз
      // определили стек вызовов

      if (node.left) todoStack.push({ type: 'lookLeft', node: node.left });
      
      todoStack.push({ type: 'takeVal', node: node});
      
      if (node.right) todoStack.push({ type: 'lookRight', node: node.right });

      while (todoStack.length > 0 || values.length < 2) {
        let task = todoStack.pop()

        if (task.type === 'lookRight') {
          if (task.node.left) todoStack.push({ type: 'lookLeft', node: task.node.left });
      
          todoStack.push({ type: 'takeVal', node: task.node});
          
          if (task.node.right) todoStack.push({ type: 'lookRight', node: task.node.right });
        }

        if (task.type === 'lookLeft') {
          if (task.node.left) todoStack.push({ type: 'lookLeft', node: task.node.left });
      
          todoStack.push({ type: 'takeVal', node: task.node});
          
          if (task.node.right) todoStack.push({ type: 'lookRight', node: task.node.right });
        }

        if (task.type === 'takeVal') {
          values.push(task.node.val)
        }
      }

      return values
    }
  }

  let root = new BSTnode();
  
  for (let i = 0; i < input.length && input[i] != 0; i++) {
    root.insert(input[i])
  }

  fs.writeFileSync("output.txt", BSTnode.secondMax(root)[1].toString())
}

main()