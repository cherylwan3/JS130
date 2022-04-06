/**
 * P:
 * Element class
 * - constructor(data, element2)
 *  - element2 = optional, the 'next' element after the
 *  newly created element
 * - next() => returns next element
 *  - if current element is tail, return null
 * - datum() => returns data value of Element
 * - isTail() => returns boolean indicates whether current elem is tail of list
 *  - tail = last one in list
 *  - tail element doesn't have another element instance stored in the next field
 * 
 * SimpleLinkedList class
 * - class 
 *    - return null if no elements
 * - size() => size of list
 * - isEmpty() => boolean true if list is empty
 * - push(elem) => push element to list
 * - peek() => data value of the head element.
 *  - if head elem is empty, return null
 * head() => returns first element 
 * .pop() => remove head element datum & return it
 * static: fromArray(arr)=> convert array to linked list 
 * toArray() => return new array with list elements
 * reverse() => reverse order of list
 */

class Element {
  constructor(datumVal, nextElem = null) {
    this.datumVal = datumVal;
    this.nextElem = nextElem;
  }

  dataum() {
    return this.datumVal;
  }

  next() {
    return this.nextElem || null;
  }

  isTail() {
    return !this.next();
  }
}

class SimpleLinkedList {
  static fromArray(array) {
    array = array || [];

    let list = new SimpleLinkedList();
    [...array].reverse().forEach(elem => list.push(elem));
    return list;
  }

  head() {
    return this.headElem || null;
  }

  peek() {
    let head = this.head();
    return head ? head.dataum() : null;
  }

  size() {
    let size = 0;
    let currentElem = this.head();

    while (currentElem) {
      size += 1;
      currentElem = currentElem.next();
    }

    return size;
  }

  isEmpty() {
    return !this.head();
  }

  push(datum) {
    let element = new Element(datum, this.head());
    this.headElem = element;
  }

  pop() {
    let datum = this.peek();
    
    let newHead = this.head().next();
    this.head() = newHead;

    return dataum;
  }

  toArray() {
    let arr = [];
    let currentElem = this.head();
    
    while(currentElem) {
      arr.push(currentElem.peek());
      currentElem = currentElem.next();
    }
    
    return arr.reverse();
  }

  reverse() {
    let list = new SimpleLinkedList();

    let currentElem = this.head();
    while(currentElem !== null) {
      list.push(element.dataum);
      currentElem = currentElem.next();
    }

    return list;
  }
}

module.exports = { SimpleLinkedList, Element };