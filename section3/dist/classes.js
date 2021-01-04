"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employee = [];
    }
    describe() {
        console.log(`${this.id} ${this.name}`);
    }
    addEmployee(employee) {
        this.employee.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employee.length);
        console.log(this.employee);
    }
}
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, 'IT');
        this.admins = admins;
    }
}
class AccountDepartment extends Department {
    constructor(id, reports) {
        super(id, 'ACCOUNT');
        this.reports = reports;
        this.myName = '';
    }
    get getMyName() {
        return this.myName;
    }
    set setMyName(name) {
        this.myName = name;
    }
    addReport(text) {
        this.reports.push(text);
    }
    printReports() {
        console.log(this.reports);
    }
}
const it = new ITDepartment('123', ['Sunny', 'Max']);
console.log(it);
it.addEmployee('Max');
it.addEmployee('Manu');
it.describe();
it.printEmployeeInformation();
const account = new AccountDepartment('123', ['1', '2']);
console.log(account.getMyName);
account.setMyName = 'sunny';
console.log(account.getMyName);
account.addReport('123');
account.printReports();
//# sourceMappingURL=classes.js.map