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

    search(node, data) {
        if (node === null) {
            return null;
        }

        if (data < node.data) {
            return this.search(node.left, data);
        }

        if (data > node.data) {
            return this.search(node.right, data);
        }

        return node;
    }

    findMinNode(node) {
        if (node.left === null) {
            return node;
        }

        return this.findMinNode(node.left);
    }

    remove(node, data) {
        if (!node) {
            return null;
        }

        if (data < node.data) {
            node.left = this.remove(node.left, data);
            return;
        }

        if (data > node.data) {
            node.right = this.remove(node.right, data);
            return;
        }

        // если нет обоих потомков - просто сносим
        if (!node.left.data && !node.right.data) {
            return null;
        }

        // если есть только один потомок - перезатираем
        if (!node.left) {
            node = node.right;
        }

        if (!node.right) {
            node = node.left;
        }

        // удаление с 2 потомками
        let minNode = this.findMinNode(node.right);
        node.data = minNode.data;
        node.right = this.remove(node.right, minNode.data);
        return node;
    }
}

const bst = new BinarySearchTree();

bst.insert(11);
bst.insert(7);
bst.insert(9);
bst.insert(15);
bst.insert(6);

console.log('bst', bst);