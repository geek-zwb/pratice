class Node {
  constructor(val) {
    this.value = val;
    this.parent = null;
    this.children = [];
  }

  addChild(node) {
    node.parent = this;
    this.children.push(node);
    return this;
  }

  siblings() {
    if (this.parent) {
      return this.parent.children.filter(node => node !== this);
    }
    return [];
  }

  get degree() {
    return this.children.length;
  }

  getDepthByRoot(root) {
    let depth = 0;
    let curNode = this;
    while(curNode.parent !== root) {
      depth++;
      curNode = curNode.parent;
    }
    return depth;
  }

  get depth () {
    return this.getDepthByRoot(null);
  }

  get height () {
    // 通过广度优先搜索直至最后一个节点，
    const queues = [this];
    let deepestNode = this;
    while(queues.length) {
      let len = queues.length;
      for (let i = 0; i < len; i++) {
        const curNode = queues.shift();
        deepestNode = curNode;
        if(curNode.children.length) {
          queues.push(...curNode.children);
        }
      }
    }
    // 获取最后一个节点的 depth 即为 height
    return deepestNode.getDepthByRoot(null);
  }

  toString(join) {
    let parts = [this.value];
    if(this.children.length) {
      parts = parts.concat(this.children.
          map(node => node.toString()).
          reduce((left, right) => left.concat(right)).
          map(node => '   ' + node)
      )
    }
    return join ? parts.join('\n') : parts;
  }
}

const root = new Node('root');
const node1 = new Node('node 1');
const node2 = new Node('node 2');
const node3 = new Node('node 3');
const node4 = new Node('node 4');
const node5 = new Node('node 5');
const node6 = new Node('node 6');

root.addChild(node1).addChild(node2);
node1.addChild(node3).addChild(node4);
node2.addChild(node5);
node5.addChild(node6);

console.log(node6.depth);
console.log(root.height);
console.log(root.toString(true));
