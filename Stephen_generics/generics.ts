class ArrayOfNumbers {
  constructor(public collection: number[]) {}
  get(index: number): number {
    return this.collection[index];
  }
}
class ArrayOfStrings {
  constructor(public collection: string[]) {}
  get(index: string): string {
    return this.collection[index];
  }
}

class ArrayOfAny<Type> {
  constructor(public collection: Type[]) {}
  get(index: number): Type {
    return this.collection[index];
  }
}

const numbers = new ArrayOfAny<number>([1, 2, 4, 5]);

numbers.get.length;

// generics function

function printScreen(arr: string[]) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function printNumber(arr: number[]) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function printAnything<T>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

printAnything<string>(['2', '34']);
