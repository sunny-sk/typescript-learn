interface Sortable {
  swap: (a: number, b: number) => void;
  compare(a: number, b: number): boolean;
  length: number;
}

export class Sorter {
  constructor(public collection: Sortable) {}

  sort(): void {
    const { length } = this.collection;
    for (let i = 0; i < length; ++i) {
      for (let j = 0; j < length - 1 - i; ++j) {
        if (this.collection.compare(j, j + 1)) {
          this.collection.swap(j, j + 1);
        }
      }
    }
  }
}
