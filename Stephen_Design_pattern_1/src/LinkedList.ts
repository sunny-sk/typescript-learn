class Node {
  next: Node | null = null;
  constructor(public data: number) {}
}

export class LinkedList {
  head: Node | null = null;
  add(x: number): void {
    const node = new Node(x);
    if (!this.head) {
      this.head = node;
      return;
    }
    let tail = this.head;
    while (tail.next) {
      tail = tail.next;
    }
    tail.next = node;
  }
  get length(): number {
    let count = 0;
    if (!this.head) {
      return 0;
    }
    let tail = this.head;
    while (tail.next) {
      tail = tail.next;
      count++;
    }
    return count;
  }
  at(index: number): Node {
    if (!this.head) {
      throw new Error('index out of bound');
    }
    let tail: Node | null = this.head;
    let count = 0;
    while (tail) {
      if (count === index) {
        return tail;
      }
      count++;

      tail = tail.next;
    }
    throw new Error('index out of bound');
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    if (!this.head) {
      throw new Error('index out of bound');
    }
    return this.at(leftIndex).data > this.at(rightIndex).data;
  }

  swap(leftIndex: number, rightIndex: number): void {
    const leftNode = this.at(leftIndex);
    const rightNode = this.at(rightIndex);
    const temp = leftNode.data;
    leftNode.data = rightNode.data;
    rightNode.data = temp;
  }

  print(): void {
    if (!this.head) {
      return;
    }
    let node: Node | null = this.head;
    while (node.next) {
      console.log(node.data);
      node = node.next;
    }
  }
}
