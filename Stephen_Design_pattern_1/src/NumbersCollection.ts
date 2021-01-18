import { Sorter } from './sorter';
export class NumberCollection extends Sorter {
  constructor(public data: number[]) {
    super();
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex];
  }
  swap(leftIndex: number, rightIndex: number) {
    let temp = this.data[leftIndex];
    this.data[leftIndex] = this.data[rightIndex];
    this.data[rightIndex] = temp;
  }

  get length(): number {
    return this.data.length;
  }
}
