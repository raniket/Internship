class node<T> {
    data: T;
    next: node<T> | null = null;
  
    constructor(data: T) {
      this.data = data;
    }
  }
  
  class LinkedList<T> {
    head: node<T> | null = null;
    
    add(data: T): void {
        
      if (!this.head) {
        //if no node is present in the list
        this.head = new node(data);
      } else {
        let current = this.head;
        while (current.next != null) {
          current = current.next;
        }
        current.next = new node(data);
      }
    }
  
     remove(data: T): void {
      if (!this.head) return;
  
      // Check if the head node is the node to be removed
      if (this.head.data == data){
        this.head = this.head.next;
        return;
      }
  
      let current = this.head.next;
      let previous = this.head;
  
      
      //Search for the node to be removed and keep track of its previous node
      while (current) {
        if (current.data == data) {
          current = null;
        } else {
          previous = current;
          current = current.next;
        }
      }
  
      /*
       set previous.next to the target.next
       In case the node target is not found, the 'previous' will point to the last node,
       since the last node has no next, nothing will happen
       */
      previous.next = previous.next ? previous.next.next : null;
    }
  
    
  
    print() {
      let current = this.head;
      while (current != null) {
        console.log(current.data);
        current = current.next;
      }
    }
  }

  let ll = new LinkedList();
  ll.add(1);
  ll.add(2);
  ll.add(3);
  ll.add(4);
  ll.add(5);
  ll.print();
  console.log('\n');
  ll.remove(3);
  ll.print();
