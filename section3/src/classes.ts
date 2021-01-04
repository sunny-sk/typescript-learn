class Department {
  // private readonly id: string;
  // private x: string = '';
  protected employee: string[] = [];

  // constructor(n: string) {
  //   console.log('called');
  //   this.name = n;
  // }

  constructor(private readonly id: string, public name: string) {}

  describe(this: Department) {
    console.log(`${this.id} ${this.name}`);
  }

  addEmployee(employee: string) {
    this.employee.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employee.length);
    console.log(this.employee);
  }
}

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, 'IT');
    this.admins = admins;
  }
}

class AccountDepartment extends Department {
  private myName: string = '';

  constructor(id: string, private reports: string[]) {
    super(id, 'ACCOUNT');
  }

  get getMyName() {
    return this.myName;
  }
  set setMyName(name: string) {
    this.myName = name;
  }

  addReport(text: string) {
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
