// const person: {
//   name: string;
//   age: number;
//   hobies: string[];
//   role: [number, string];
// } = {
//   name: 'sunny',
//   age: 22,
//   hobies: ['sports', 'cooking'],
//   role: [2, 'author'],
// };
enum Role {
  ADMIN = 4,
  READ_ONLY,
  AUTHOR,
}
const person = {
  name: 'sunny',
  age: 22,
  hobies: ['sports', 'cooking'],
  role: Role.ADMIN,
};

// person.role.push('writer');

console.log(person);
