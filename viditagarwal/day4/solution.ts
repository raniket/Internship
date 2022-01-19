class Nodelink<T>{
    value:T;
    next:Nodelink<T>|null;
    constructor(value: T) {
    	this.value = value;
      	this.next = null;
}
}
class LinkedList<T>{
    start1: Nodelink<T>|null;
    size:number;
    constructor() {
    	this.start1 = null ;
        this.size=0;
    }

    add=(value:T)=>{
        if(this.size==0){
            let node_n = new Nodelink<T>(value);
            this.start1=node_n;

        }
        else {
            let node_n = new Nodelink<T>(value);
            let curr= this.start1;
            while(curr.next!=null){
                curr=curr.next;
            }
            curr.next=node_n;

        }
        this.size=this.size+1;
    }

    rem=(value1:T)=>{
        if(this.size==0){
            console.log("List is empty");
        }
        else if(this.start1.value==value1){
            this.start1=this.start1.next;
            this.size=this.size--;
        }
        else {
            let curr= this.start1;
            while(curr.next.value!=value1 && curr.next!=null){
                curr=curr.next;
            }
            if(curr.next==null){
                console.log("value not present");
            }
            if(curr.next.value==value1){
                curr.next=curr.next.next;
                this.size--;
            }
        }

    }

    print=()=>{
        let curr=this.start1;
        while(curr!=null){
            console.log(curr.value)
            curr=curr.next;
        }

    }

}

const list = new LinkedList<number>();
console.log("start")
list.add(2);
list.add(3);
list.add(4);
list.add(5);
list.add(6);
list.print();
list.rem(4);
list.print();
