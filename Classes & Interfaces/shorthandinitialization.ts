class Department {
    // private id : string;
    //private name: string;
    private employees: string[] = [];
  
    // * can initialize the fields directly  here  with the access modifier added
    constructor(private id:string, public name: string) {
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
  
  const account = new Department("d1","accounting");
  
  account.addEmployee("sujan");
  account.addEmployee("bro");
  
  
  account.describe();
  account.printEmpInfo();
  
  