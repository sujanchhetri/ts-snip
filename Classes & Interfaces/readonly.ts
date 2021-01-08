class Department {
    // private readonly id : string;
    //private name: string;
    private employees: string[] = [];
  
  // * cannot write on the id property
    constructor(private readonly id:string, public name: string) {
      //this.id = id;
      //this.name = name;
    }
  
  
    // * this property
    describe(this: Department) {
      console.log(`department: (${this.id}) : ${this.name}`);
    }
  
    addEmployee(employee: string) {
      // ! this.id = 'd2'; cannot do this cause id is readonly 
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
  
  