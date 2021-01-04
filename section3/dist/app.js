"use strict";
class Person {
    constructor(name, check) {
        this.name = name;
        this.age = 12;
        this.check = true;
        this.check = check;
    }
    greet() {
        this.age = 2;
        console.log(this.name, this.age);
    }
}
let x = new Person('sunny', true);
x.greet();
//# sourceMappingURL=app.js.map