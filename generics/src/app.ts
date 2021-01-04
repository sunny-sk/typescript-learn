// const names1: string[] = ['sunny', 'pankaj'];
// // or
// const names: Array<string> = ['sunny', 'pankaj'];

// // union type
// const names2: Array<string | number> = ['sunny', 'pankaj'];

// // promise which returns number
// const promise: Promise<number> = new Promise((resolve, _) => {
//   setTimeout(() => {
//     resolve(10);
//   }, 2000);
// });

// promise.then((res) => {
//   // console.log(res.split(''));
// });

// custom generics types

// Generic function

function merge<T extends Object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

// // this is not good code
// const mergeObj = merge({ name: 'sunny' }, { age: 12 }) as {
//   name: string;
//   age: number;
// };

const mergeObj = merge<{ name: string }, { age: number }>(
  { name: 'sunny' },
  { age: 12 }
);
// const mergeObj1 = merge({ name: 'sunny' }, 3);

// console.log(mergeObj.age);
interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let x = 'Got no value';
  if (element.length > 0) {
    x = 'Got' + element.length + 'elements';
  }
  return [element, x];
}

// console.log(countAndDescribe('Hi there'));

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return 'value of ' + obj[key];
}

console.log(extractAndConvert({ name: 'sunny' }, 'name'));

// Generic classes

class DataStorage<T> {
  private data: T[] = [];
  addItem(item: T) {
    this.data.push(item);
  }
  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }
  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('max');
textStorage.addItem('sunny');
textStorage.removeItem('max');
console.log(textStorage.getItems());

const textStorage1 = new DataStorage<number>();
textStorage1.addItem(1);
textStorage1.addItem(3);
textStorage1.removeItem(1);
console.log(textStorage1.getItems());

const objectStorage = new DataStorage<object>();
objectStorage.addItem({ name: 'max' });
objectStorage.addItem({ name: 'menu' });
objectStorage.removeItem({ name: 'max' });
console.log(objectStorage.getItems());

interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  let CourseGoals: Partial<CourseGoal> = {};

  CourseGoals.title = title;
  CourseGoals.description = description;
  CourseGoals.completeUntil = date;
  return CourseGoals as CourseGoal;
}

const names: Readonly<string[]> = ['max', 'menu'];
// names.push('anna');
// names.push();
