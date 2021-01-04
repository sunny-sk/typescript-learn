function add(input1: number, input2: number) {
  return input1 + input2;
}

function printResult(params: number) {
  console.log(params);
}

let combinedValues: (a: number, b: number) => number;
combinedValues = add;
// combinedValues = printResult; // Errors
