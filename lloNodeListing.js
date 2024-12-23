class Node {
    constructor(value){
        this.value = value;
        this.next = null
    }
}

class LinkedLIst {
    constructor(){
        this.head = null
        this.size = 0
    }
}

append(value){
    const newNode = new Node(value);
    if (!this.head) {
        this.head = newNode;
    } else {
        let current = this.head;
        while(current.next) {
            current = current.next;
        }
        current.next = newNode
    }

    this.size++;

    removeFirst(){
        if(!this.head) return null;
        const removedValue = this.head.values;
        this.head = this.head.next;
        this.size--;
        return removedValue;
    }

    print(){
        let current = this.head;
        const tasks = [];
        while(current) {
            tasks.push(current.value);
            current = current.next;
        }

        console.log(tasks);

        const task = new LinkedList();

            tasks.append("Data Structures - Array");
            tasks.append("Variable Type - Integer");
            tasks.append("Sorting Algorith - Bubble Sort");

            tasks.print();

            tasks.removeFirst;
            tasks.print();
    }
}