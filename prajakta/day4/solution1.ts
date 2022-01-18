class ListNode {
    value:number;
    next:ListNode;

    constructor(value:number) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    private head = null;
    private size:number = 0;

    // add the value specified at the end
    public add(value):void{
        let node = new ListNode(value);
        let current;
        
        //if list is empty assign the node as head node
        if (this.head === null) {
            this.head = node;
        } else {
            current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }
    // removes the value specified from the linked list
    public remove(value):number{
        //if empty list
        if (!this.head) {
            return 0;
        }
        //if head node is to be removed
        if (this.head.value===value) {
            this.head = this.head.next;
            this.size--;
            return 1;
        }
        //for other nodes
        let current = this.head;
        let previous = null;
        while (current != null && current.value != value) {
            previous = current;
            current = current.next;
        }
        
        if (current != null) {
            previous.next = current.next;
            this.size--;
            return 1;
        }

        if (current == null) {
            return 0;
        }
    }
    //traverses the linked list to print it
    public print():void{
        if (!this.head) return;

        let current = this.head;
        let list:string="";
        while (current.next!==null) {
            list+=current.value+" --> ";
            current=current.next;
        }
        list+=current.value+"\n";
        console.log(list);
    }
    // removes the node at the position specified
    public removeAt(pos):number {
        if (pos > -1 && pos < this.size) {
            let current = this.head;
            let previous= null;
            let index = 0;

            // if head node
            if (pos === 0) {
                this.head = current.next;
            } else {
                while (index++ < pos) {
                    previous = current;
                    current = current.next;
                }
                previous.next = current.next;
            }
            this.size--;
            return 1;
        } else {
            return 0;
        }
    }
}

let ll = new LinkedList();
ll.add(1);
ll.add(2);
ll.add(3);
ll.add(4);
ll.add(5);

console.log("\nAfter adding elements");
ll.print()

const val=2;
if(ll.remove(val)){
    console.log(`\nAfter removing element with value ${val}`);
    ll.print()
}else{
    console.log(val + " value not found");
}

let pos=3
if(ll.removeAt(pos)){
    console.log(`\nAfter removing element at ${pos} position `);
    ll.print()
}else{
    console.log(pos + " position element not found");
}

