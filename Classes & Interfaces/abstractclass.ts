abstract class Department {

    static year = 2021;
    //private readonly id : string;
    //private name: string;
    protected employees: string[] = [];
  
    constructor(protected readonly id: string, public name: string) {
      //this.id = id;
      //this.name = name;
    }
  
    static createEmployee(name: string) {
      return { name: name };
    }
  
    // * enables sharing common methods in the inheriting classes
    abstract describe(this: Department):void;
  
    addEmployee(employee: string) {
      this.employees.push(employee);
    }
  
    printEmpInfo() {
      console.log(this.employees.length);
      console.log(this.employees);
    }
  }
  
  class ItDepartment extends Department {
    constructor(id: string, public admins: string[]) {
      super(id, "IT"); 
    }
  
    describe() {
      console.log('Accounting Department -ID:'+ this.id);
    }
  }
  
  class AccountDepartment extends Department {
    private lastReport: string;
  
    get mostRecentReport() {
      if (this.lastReport) {
        return this.lastReport;
      }
      throw new Error("no report found");
    }
  
    set mostRecentReport(value: string) {
      this.addReports(value);
    }
  
    constructor(id: string, private reports: string[]) {
      super(id, "Account"); 
      this.lastReport = reports[0];
    }
  
    describe() {
      console.log('Accounting Department -ID:'+ this.id);
    }
  
    addEmployee(name: string) {
      if (name === "sunil") {
        return;
      }
      this.employees.push(name);
    }
  
    addReports(text: string) {
      this.reports.push(text);
      this.lastReport = text;
    }
  
    getReports() {
      console.log(this.reports);
    }
  }
  
  const emp1 = Department.createEmployee('zoro');
  console.log(emp1,Department.year);
  
  const it = new ItDepartment("d1", ["sujan"]);
  
  it.addEmployee("sujan");
  it.addEmployee("bro");
  
  it.describe();
  it.printEmpInfo();
  
  console.log(it);
  
  const account = new AccountDepartment("d2", []);
  
  account.addReports("amount transfered ...");
  
  account.mostRecentReport = "amount to be transfered";
  console.log(account.mostRecentReport);
  
  account.addEmployee("john");
  account.addEmployee("sunil");
  
  // account.printEmpInfo();
  // account.getReports();
  account.describe();