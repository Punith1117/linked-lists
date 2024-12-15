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
}