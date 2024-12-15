class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    //insert node at first
    insertAtFirst(data) {
        this.head = new Node(data, this.head);
        this.size++;
    }

    //insert node at the end
    insertAtEnd(data) {
        let node = this.head;
        while (node.next) {//this runs until node.next is equal to null
            node = node.next
        }
        node.next = new Node(data);
        this.size++;
    }

    //get total number of nodes in the list
    getSize() {
        return this.size;
    }

    //get first node
    getFirstNode() {
        return this.head;
    }

    //get last node
    getLastNode() {
        let node = this.head;
        while (node.next) {
            node = node.next;
        }
        return node;
    }

    //get node at some index
    getNodeAt(index) {
        if ((index < 0) || (index > (size-1)))
            return null;
        let count = 0; 
        let node = this.head;
        while (count < index) {
            node = node.next
            count++;
        }
        return node;
    }

    //remove last node
    removeLastNode() {
        let node = this.head;
        while (node.next.next) {
            node = node.next;
        }
        node.next = null
        this.size--;
    }

    //returns true if the passed data is in the list
    contains(data) {
        let node = this.head;
        while (node) {
            if (node.data == data)
                return true
            node = node.next;
        }
        return false
    }

    //fing the index of the data
    indexOf(data) {
        let node = this.head;
        let count = 0;
        while(node) {
            if (node.data == data)
                return count;
            count++;
            node = node.next;
        }
        return null;
    }

    //insert at the given index
    insertAtIndex(data, index) {
        if ((index < 0) || (index > (size-1))) 
            return;

        let node = this.head;
        if (index == 0) {
            this.insertAtFirst(data);
        } else if (index == size) {
            this.insertAtEnd(data)
        } else {
            for (let i = 0; i < (index-1); i++) {
                node = node.next;
            }
            node.next = new Node(data, node.next);
        }
        this.size++;
    }


    //remove node at the given index
    removeAtIndex(index) {
        if ((index < 0) || (index > (size-1))) 
            return;  
        
        if (index == 0) {
            let firstNode = this.head;
            this.head = firstNode.next;
            this.size--;
        } else if (index == (size-1)) {
            this.removeLastNode();
        } else {
            let PreviousNode = this.head;
            let NodeToDelete;
            for (let i = 1; i < index; i++) {
                PreviousNode = PreviousNode.next
            }
            NodeToDelete = PreviousNode.next;
            PreviousNode.next = NodeToDelete.next;
            this.size--;
        }

    } 
    //display all data in the list
    displayAllData() {
        let node = this.head;
        let str = '';
        while (node) {
            str += "(" + node.data + ") -> ";
            node = node.next;
            if (node == null)
                str += 'null';
        }
        console.log(str);
    }
}

let ll = new LinkedList();
ll.insertAtFirst(300);
ll.insertAtFirst(200);
ll.insertAtEnd(400);
ll.insertAtEnd(500);

/*
let size = ll.getSize();
console.log(size)

let someNode = ll.getNodeAt(2);
console.log(someNode);

let firstNode = ll.getFirstNode();
console.log(firstNode); 
let lastNode = ll.getLastNode();
console.log(lastNode);

console.log(ll.contains(500));
ll.removeLastNode();
console.log(ll.contains(500));
console.log(ll.indexOf(500))
console.log(ll.indexOf(400))
ll.insertAtIndex(500, 3);
ll.removeAtIndex(2);
*/
ll.displayAllData();