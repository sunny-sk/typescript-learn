function add(input1, input2) {
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        return input1 + input2;
    }
    else {
        return input1.toString() + input2.toString();
    }
}
var result1 = add(1, 3);
var result2 = add('234', 3);
console.log(result1);
console.log(result2);
