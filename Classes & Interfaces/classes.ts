class Department {
    name: string;

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
  
    
  }
  
  const account = new Department("accounting");
  
  account.describe();

  // * this property
  const accountCopy = { name: "dummy", describe: account.describe };
  
  accountCopy.describe();
  