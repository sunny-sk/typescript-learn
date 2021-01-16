import { NumberCollection } from './NumbersCollection';
export class Sorter {
  constructor(public collection: NumberCollection) {}

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
