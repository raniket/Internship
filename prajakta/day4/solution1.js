var ListNode = /** @class */ (function () {
    function ListNode(value) {
        this.value = value;
        this.next = null;
    }
    return ListNode;
}());
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.head = null;
        this.size = 0;
    }
    // add the value specified at the end
    LinkedList.prototype.add = function (value) {
        var node = new ListNode(value);
        var current;
        //if list is empty assign the node as head node
        if (this.head === null) {
            this.head = node;
        }
        else {
            current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    };
    // removes the value specified from the linked list
    LinkedList.prototype.remove = function (value) {
        //if empty list
        if (!this.head) {
            return 0;
        }
        //if head node is to be removed
        if (this.head.value === value) {
            this.head = this.head.next;
            this.size--;
            return 1;
        }
        //for other nodes
        var current = this.head;
        var previous = null;
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
    };
    //traverses the linked list to print it
    LinkedList.prototype.print = function () {
        if (!this.head)
            return;
        var current = this.head;
        var list = "";
        while (current.next !== null) {
            list += current.value + " --> ";
            current = current.next;
        }
        list += current.value + "\n";
        console.log(list);
    };
    // removes the node at the position specified
    LinkedList.prototype.removeAt = function (pos) {
        if (pos > -1 && pos < this.size) {
            var current = this.head;
            var previous = null;
            var index = 0;
            // if head node
            if (pos === 0) {
                this.head = current.next;
            }
            else {
                while (index++ < pos) {
                    previous = current;
                    current = current.next;
                }
                previous.next = current.next;
            }
            this.size--;
            return 1;
        }
        else {
            return 0;
        }
    };
    return LinkedList;
}());
var ll = new LinkedList();
ll.add(1);
ll.add(2);
ll.add(3);
ll.add(4);
ll.add(5);
console.log("\nAfter adding elements");
ll.print();
var val = 2;
if (ll.remove(val)) {
    console.log("\nAfter removing element with value ".concat(val));
    ll.print();
}
else {
    console.log(val + " value not found");
}
var pos = 3;
if (ll.removeAt(pos)) {
    console.log("\nAfter removing element at ".concat(pos, " position "));
    ll.print();
}
else {
    console.log(pos + " position element not found");
}
