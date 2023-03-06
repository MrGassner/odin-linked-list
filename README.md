# The Odin Project: Linked Lists

This repository is a simple implementation of a linked list as assigned on the odin project

A linked list is a linear collection of data elements called nodes that “point” to the next node by means of a pointer.
Each node holds a single element of data and a link or pointer to the next node in the list. A head node is the first node in the list, a tail node is the last node in the list. Below is a basic representation of a linked list:

[ NODE(head) ] -> [ NODE ] -> [ NODE(tail) ] -> null

## Suported functions

* `append(value):` adds a new node containing value to the end of the list
* `prepend(value):` adds a new node containing value to the start of the list
* `size():` returns the total number of nodes in the list
* `headNode():` returns the first node in the list
* `tailNode():` returns the last node in the list
* `at(index):` returns the node at the given index
* `remove():` removes the last element from the list
* `removeHead():` removes the first element on from the list
* `contains(value):` returns true if the passed in value is in the list and otherwise returns false.
* `find(value):` returns the index of the node containing value, or null if not found.
* `print():` represents your LinkedList objects as strings, so you can print them out and preview them in the console. 
* `insertAt(value, index):` that inserts a new node with the provided value at the given index.
* `removeAt(index):` that removes the node at the given index.
