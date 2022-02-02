type TNode = {
    data: number;
    left?: TNode;
    right?: TNode;
}

class _Node {
    left: null;
    right: null;
    data: number;

    constructor(data: number) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    root: TNode;

    constructor() {
        this.root = null;
    }

    insert(data: number) {
        const node = new _Node(data);

        if (!this.root) {
            this.root = node;
            return;
        }

        this.insertNode(this.root, node);
    }

    insertNode(node: TNode, newNode: TNode) {
        if (newNode.data < node.data) {
            if (!node.left) {
                node.left = newNode;
                return;
            }

            this.insertNode(node.left, newNode);
        } else {
            if (!node.right) {
                node.right = newNode;
                return;
            }

            this.insertNode(node.right, newNode);
        }
    }

    inOrderTraverse(node, callback) {
        if (!node) {
            return;
        }

        this.inOrderTraverse(node.right, callback);
        callback(node.data);
        this.inOrderTraverse(node.left, callback);
    }

    preOrderTraverse(node, callback) {
        if (!node) {
            return;
        }

        callback(node.data);
        this.preOrderTraverse(node.left, callback);
        this.preOrderTraverse(node.right, callback);
    }

    postOrderTraverse(node, callback) {
        if (!node) {
            return;
        }

        this.postOrderTraverse(node.left, callback);
        this.postOrderTraverse(node.right, callback);
        callback(node.data);
    }
}

const bst = new BinarySearchTree();

bst.insert(11);
bst.insert(7);
bst.insert(9);
bst.insert(15);
bst.insert(6);

console.log('bst', bst);