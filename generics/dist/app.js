"use strict";
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const mergeObj = merge({ name: 'sunny' }, { age: 12 });
function countAndDescribe(element) {
    let x = 'Got no value';
    if (element.length > 0) {
        x = 'Got' + element.length + 'elements';
    }
    return [element, x];
}
function extractAndConvert(obj, key) {
    return 'value of ' + obj[key];
}
console.log(extractAndConvert({ name: 'sunny' }, 'name'));
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
const textStorage = new DataStorage();
textStorage.addItem('max');
textStorage.addItem('sunny');
textStorage.removeItem('max');
console.log(textStorage.getItems());
const textStorage1 = new DataStorage();
textStorage1.addItem(1);
textStorage1.addItem(3);
textStorage1.removeItem(1);
console.log(textStorage1.getItems());
const objectStorage = new DataStorage();
objectStorage.addItem({ name: 'max' });
objectStorage.addItem({ name: 'menu' });
objectStorage.removeItem({ name: 'max' });
console.log(objectStorage.getItems());
function createGoal(title, description, date) {
    let CourseGoals = {};
    CourseGoals.title = title;
    CourseGoals.description = description;
    CourseGoals.completeUntil = date;
    return CourseGoals;
}
const names = ['max', 'menu'];
//# sourceMappingURL=app.js.map