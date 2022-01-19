class ListNode<T> {
    value: T;
    next: ListNode<T> | null;

    constructor(value: T) {
        this.value = value;
        this.next = null;
    }

}

class LinkedList<T> {
    head: ListNode<T>;
    constructor(value: T) {
        this.head = new ListNode<T>(value);
    }
    add(value: T): void {
        if (!this.head) {
            return;
        }
        const newNode = new ListNode<T>(value);
        let currentNode:ListNode<T> | null = this.head;
        while (currentNode.next) {
            currentNode = currentNode.next;
        }
        currentNode.next = newNode;
    }
    remove(value: T): void {
        if (!this.head || !this.head.next) {
            return;
        }
        let currentNode:ListNode<T> | null = this.head.next;
        while (currentNode && currentNode.next) {
            if (currentNode.next.value === value) {
                currentNode.next = currentNode.next.next;
                break;
            }
            currentNode = currentNode.next;
        }
    }
    print(): void {
        if (!this.head || !this.head.next) {
            return;
        }
        let currentNode:ListNode<T> | null = this.head.next;
        while (currentNode) {
            console.log(currentNode.value);
            currentNode = currentNode.next;
        }
    }
}


const list = new LinkedList<number>(-1); //dummy Node
list.add(1);
list.add(2);
list.add(3);
list.add(4);
list.add(5);

list.print();

list.remove(3);

list.print();  