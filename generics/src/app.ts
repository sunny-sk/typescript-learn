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

function merge<T, U>(objA: T, objB: U) {
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

console.log(mergeObj.age);
