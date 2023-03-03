function createNode(value) {
    return {
      value: value,
      next: null,
    };
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
  
    append(value) {
      this.length++;
      let node = createNode(value);
  
      if (this.tail) {
        this.tail.next = node;
        this.tail = node;
        return node;
      }
  
      this.head = this.tail = node;
      return node;
    }
  
    prepend(value) {
      this.length++;
      let node = createNode(value);
  
      if (this.head) {
        node.next = this.head;
        this.head = node;
        return node;
      }
  
      this.head = this.tail = node;
      return node;
    }

    size() {
        console.log(this.length)
    }

    headNode() {
        console.log(this.head.value)
    }

    tailNode() {
        console.log(this.tail.value)
    }

    at(index) {
        let current = this.head;
        for (let i = 0; i != index; i++) {
            current = current.next
        }
        console.log(current.value)
    }
  
    remove() {
      if (this.tail) {
        this.length--;
  
        const tailNode = this.tail;
  
        // search for the node before tail
        let currentNode = this.head;
  
        while (currentNode.next != tailNode) {
          currentNode = currentNode.next;
        }
        const beforeTail = currentNode;
        this.tail = beforeTail;
        this.tail.next = null;
  
        return tailNode;
      }
      return undefined;
    }

    removeHead() {
        if (this.head) {
            this.length--;
            const removedNode = this.head;
            this.head = this.head.next;
            return removedNode;
        }
        return undefined;
        }

    contains(value) {
        let current = this.head;
        for (let i = 0; i < this.length; i++) {
            if (current.value === value) return console.log(true)
            current = current.next  
        }
        return console.log(false)
    }

    find(value) {
        let current = this.head;
        for (let i = 0; i < this.length; i++) {
            if (current.value === value) return console.log(`index: ${i}`)
            current = current.next  
        }
        return console.log(false)

    }

    print() {
      let current = this.head;
      while (current) {
        console.log(`( ${current.value} )`);
        console.log('  ↓')
        current = current.next;
      }
      console.log(null)
    }
  
    insertAt(value, index) {
      if (index >= this.length) {
        throw new Error("Insert index out of bounds");
      }
  
      if (index === 0) {
        return this.insertHead(value);
      }
      
      this.length++;
      let previousNode = null;
      let currentNode = this.head;
      for (let i = 0; i < index; i++) {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      const newNode = createNode(value);
      newNode.next = currentNode;
      previousNode.next = newNode;
      return newNode;
    }
  
    removeAt(index) {
      if (index >= this.length) {
        throw new Error("Remove index out of bounds");
      }
  
      if (index === 0) {
        return this.removeHead();
      }
  
      this.length--;
      let previousNode = null;
      let currentNode = this.head;
      for (let i = 0; i < index; i++) {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      previousNode.next = currentNode.next;
      return currentNode;
    }
  }
  
  // Testing functions
  
  const linkedList = new LinkedList();
  
  linkedList.append(7);
  linkedList.append(8);
  linkedList.prepend(9);
  linkedList.prepend(10);
  linkedList.insertAt(66, 2)
  linkedList.removeAt(3);

  linkedList.print();    
  console.log(`list length: ${linkedList.length}`); 
  linkedList.size();
  linkedList.headNode();
  linkedList.tailNode();
  linkedList.at(2)
  linkedList.contains(66)
  linkedList.find(10)
  linkedList.find(66)
  linkedList.contains(69)
  linkedList.find(69)