# Problem Statement

## Implement LinkedList Using TypeScript

### LinkedList should be able to support the following operations:
  * `add`    Add a new item to linked list
  * `remove`    Remove an item from linked list
  * `print`    Print all items in linked list


## Example
```
const list = new LinkedList<number>();    Creates a new linked list instance

list.add(1);    Adding 1 in list
list.add(2);    Adding 2 in list
list.add(3);    Adding 3 in list
list.add(4);    Adding 4 in list
list.add(5);    Adding 5 in list

list.print();    Print all the items in list

list.remove(3);    Remove item 3 from list

list.print();    Print all the items in list, this time 3 should not appear
```