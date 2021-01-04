function add(input1: number | string, input2: number | string) {
  if (typeof input1 === 'number' && typeof input2 === 'number') {
    return input1 + input2;
  } else {
    return input1.toString() + input2.toString();
  }
}
const result1 = add(1, 3);
const result2 = add('234', 3);
console.log(result1);
console.log(result2);

type customType = number | string;

let x: customType = '234';
x = 34;
