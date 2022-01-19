class node<T>{
     data: T;
     next: node<T>|null;
     constructor(data:T){
         this.data=data;
         this.next=null;
     }
}
class LinkedList<T>{
    head:node<T>|null;
    constructor(){
        this.head= null;
    }
    add(data: T):void{
        if(!this.head){
            this.head=new node<T>(data);
            return;
        }
        const newNode= new node<T>(data);
        let current:node<T>=this.head;
        while(current.next){
            current=current.next;
        }
        current.next=newNode;
    }
    remove(data:T):void{
        if(!this.head)
        return;
        if(this.head.data==data){
            this.head=this.head.next;
            return;
        }
        let current:node<T>=this.head;
        while(current.next){
            if(current.next.data==data){
            current.next=current.next.next;
            return;
            }current=current.next;
        }
    }
    print():void{
        if(!this.head){
            console.log("Empty");
            return;
        }
        let current:node<T>|null=this.head;
        while(current){
            console.log(current.data);
            current=current.next;
        }
    }
}

const list=new LinkedList<number>();
list.add(1);
list.add(2);
list.add(3);
list.add(4);
list.add(5);

list.print();

list.remove(3);

list.print();
