export class CharacterCollection {
  constructor(public data: string) {}

  get length(): number {
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return (
      this.data[leftIndex].toLocaleLowerCase() >
      this.data[rightIndex].toLocaleLowerCase()
    );
  }

  swap(leftIndex: number, rightIndex: number) {
    let tempData = this.data.split('');
    let temp = tempData[leftIndex];
    tempData[leftIndex] = tempData[rightIndex];
    tempData[rightIndex] = temp;
    this.data = tempData.join('');
  }
}
