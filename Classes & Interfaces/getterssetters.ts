class Department {
    //private readonly id : string;
    //private name: string;
    protected employees: string[] = [];
  
    constructor(private readonly id: string, public name: string) {
      //this.id = id;
      //this.name = name;
    }
  
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
  
  class ItDepartment extends Department {
    constructor(id: string, public admins: string[]) {
      super(id, "IT"); //calls the constructor of base class
    }
  }
  
  class AccountDepartment extends Department {
    private lastReport: string;
    // * enables to acces a specific private value
    get mostRecentReport() {
      if (this.lastReport) {
        return this.lastReport;
      }
      throw new Error("no report found");
    }
  
    set mostRecentReport(value:string){
      this.addReports(value);
    }
  
    constructor(id: string, private reports: string[]) {
      super(id, "Account"); //calls the constructor of base class
      this.lastReport = reports[0];
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
  
  const it = new ItDepartment("d1", ["sujan"]);
  
  it.addEmployee("sujan");
  it.addEmployee("bro");
  
  it.describe();
  it.printEmpInfo();
  
  console.log(it);
  
  const account = new AccountDepartment("d2", []);
  
  account.addReports("amount transfered ...");
  
  // * private value is also accesible
  account.mostRecentReport = "amount to be transfered";
  console.log(account.mostRecentReport);
  
  account.addEmployee("john");
  account.addEmployee("sunil");
  
  account.printEmpInfo();
  account.getReports();
  