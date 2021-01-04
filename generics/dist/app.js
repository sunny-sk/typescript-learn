"use strict";
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const mergeObj = merge({ name: 'sunny' }, { age: 12 });
console.log(mergeObj.age);
//# sourceMappingURL=app.js.map