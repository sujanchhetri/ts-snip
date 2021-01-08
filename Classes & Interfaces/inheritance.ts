class Department {
  //private readonly id : string;
  //private name: string;
  private employees: string[] = [];

  // * cannot write on the id property
  constructor(private readonly id: string, public name: string) {
    //this.id = id;
    //this.name = name;
  }

  // * this property
  describe(this: Department) {
    console.log(`department: (${this.id}) : ${this.name}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmpInfo() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

// * inherited from department,only single inheritance is possible
class ItDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, "IT"); //calls the constructor of base class
  }
}

// * inherited from department,only single inheritance is possible
class AccountDepartment extends Department {
  constructor(id: string, private reports: string[]) {
    super(id, "Account"); //calls the constructor of base class
  }

  addReports(text: string) {
    this.reports.push(text);
  }

  getReports() {
    console.log(this.reports);
  }
}

const it = new ItDepartment("d1", ["sujan"]);

it.addEmployee("sujan");
it.addEmployee("bro");

it.describe();
it.printEmpInfo();

console.log(it);

const account = new AccountDepartment("d2", []);

account.addReports("amount transfered ...");

account.getReports();
