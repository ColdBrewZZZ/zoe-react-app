countNodes() {
    if(this.head === null) {
        return null
    }

    let counter = 1;

    console.log(this.head)

    counter += countNodes(this.head.right)
    counter += countNodes(this.head.left);

    console.log(counter)
    return counter; 
  }
}

const nodeG = new Node(7);

const nodeE = new Node(4);
nodeE.Right = nodeG;

const nodeF = new Node(15);


const nodeD = new Node(8);

const nodeB = new Node(-3);
nodeB.Left = nodeD;

const nodeC = new Node(20);
nodeC.Left = nodeE;
nodeC.Right = nodeF;

const parentNode = new Node(8);
parentNode.Left = nodeB;
parentNode.Right = nodeC;


function exists(bt, data) {
if (bt === null) {
  return false;
}

if (bt.data === data) {
  return true;
}

if (exists(bt.left, data) || exists(bt.right, data)) {
  return true;
} else {
  return false;
}
}

function printLevelOrder(bt) {
if (bt === null) {
  return;
}

const queue = []; 
const outputArray = [];
queue.push(bt);

while (queue.length > 0) {
  const currentNode = queue.shift(); 

  outputArray.push(currentNode.data); 

 
  if (currentNode.left !== null) {
    queue.push(currentNode.left);
  }

 
  if (currentNode.right !== null) {
    queue.push(currentNode.right);
  }
}

return outputArray;
}

// tree

function printTree(node, indent) {
let result = `Data: ${node.data}\n`;

if (node.left) {
    result += `${indent}  left: ${printTree(node.left, indent + '    ')}\n`;
} else {
    result += `${indent}  left: null\n`;
}

if (node.right) {
    result += `${indent}  right: ${printTree(node.right, indent + '    ')}\n`;
} else {
    result += `${indent}  right: null\n`;
}

return result;
}

//console.log(printLevelOrder(parentNode))



// console.log(exists(parentNode, 15)); // true
// console.log(exists(parentNode, 300)); // false


console.log(parentNode.toString());

function countLeaves(bt) {
if (bt === null) {
  return "zero";
}

const queue = []; 
let count = 0;
queue.push(bt);

while (queue.length > 0) {
  const currentNode = queue.shift(); 

  if (currentNode.left === null && currentNode.right === null) {
    count = count + 1;
  }

 
  if (currentNode.left !== null) {
    queue.push(currentNode.left);
  }

 
  if (currentNode.right !== null) {
    queue.push(currentNode.right);
  }
}

return count;
     
}

console.log(countLeaves(parentNode));

createBTree.preIndex = 0;

function createBTree(inOrder, preOrder, start, end) {
    if (start > end) {
      return null;
    }

  
    const data = preOrder[createBTree.preIndex];
    createBTree.preIndex++;
    const root = new Node(data);


    if (start === end) {
      return root;
    }


    const inIndex = inOrder.indexOf(data);


    root.left = createBTree(inOrder, preOrder, start, inIndex - 1);
    root.right = createBTree(inOrder, preOrder, inIndex + 1, end);

    return root;
}


console.log(printTree( createBTree([4, 2, 5, 1, 6, 3],[1, 2, 4, 5, 3, 6], 0, 5),' ' ));


// BST

function insertToBST(bst, data) {
if (bst === null) {
  return new Node(data);
}

if (data < bst.data) {
  bst.left = insertToBST(bst.left, data);
}

else {
  bst.right = insertToBST(bst.right, data);
}

return bst;
}

function existsInBST(bst, data){
if (bst === null){
  return false;
}

if (data === bst.data){
  return true;
} else if (data < bst.data){
  return existsInBST(bst.left, data);
} else {
  return existsInBST(bst.right, data);
}
}

const root = insertToBST(null, 15);
insertToBST(root, 6);
insertToBST(root, 16);
insertToBST(root, 5);
insertToBST(root, 8);
insertToBST(root, 26);
insertToBST(root, 6);
insertToBST(root, 9);


// console.log(printTree(root));

// console.log(root.toString());

// console.log(existsInBST(root, 6)) // true
// console.log(existsInBST(root, 55)) // false


