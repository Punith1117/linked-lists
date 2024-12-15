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

let size = ll.getSize();
console.log(size)

let firstNode = ll.getFirstNode();
console.log(firstNode); 
let lastNode = ll.getLastNode();
console.log(lastNode);

ll.displayAllData();