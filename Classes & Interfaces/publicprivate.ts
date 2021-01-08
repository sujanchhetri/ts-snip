class Department {
    name: string;
    private employees: string[] = [];
    constructor(name: string) {
      this.name = name;
    }
  
    //   describe(){
    //       console.log('department:'+ this.name);
    //   }
  
    // * this property
    describe(this: Department) {
      console.log("department:" + this.name);
    }
  
    addEmployee(employee: string) {
      this.employees.push(employee);
    }
  
    printEmpInfo() {
      console.log(this.employees.length);
      console.log(this.employees);
    }
  }
  
  const account = new Department("accounting");
  
  account.addEmployee("sujan");
  account.addEmployee("bro");
  // account.addEmployee('extraa')   
  // * can add directly but not suggested to use,adding from outside the class -public; private cannot be accessed
  
  account.describe();
  account.printEmpInfo();
  
  // * this property
  // const accountCopy = { name: "dummy", describe: account.describe };
  
  // accountCopy.describe();
  