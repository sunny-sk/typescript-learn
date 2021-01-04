// interface Person {
//   name: string;
//   age: number;
//   greet(phrase: string): void;
// }

// let user1: Person;

// user1 = {
//   name: 'sunny',
//   age: 4,
//   greet(phrase: string) {
//     console.log(phrase, this.name);
//   },
// };

// =============================

interface Greetable {
  name: string;
  readonly age: number;
  greet(phrase: string): void;
}

class Person implements Greetable {
  age = 12;
  readonly check: boolean = true;
  constructor(public name: string, check: boolean) {
    this.check = check;
  }
  greet() {
    this.age = 2;
    console.log(this.name, this.age);
  }
}

let x = new Person('sunny', true);
x.greet();
