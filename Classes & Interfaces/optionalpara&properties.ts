interface Named {
    // *  "?" denotes that the value is optional,if not passed as para then is neglected 
    name?: string;
    outputName?: string;
  }
  
  interface Greetable extends Named {
    greet(phrase: string): void;
  }
  
  class Person implements Greetable {
    name?: string;
    age = 30;
  
    constructor(n?: string) {
      if (n) {
        this.name = n;
      }
    }
  
    greet(phrase: string) {
      if (this.name) {
        console.log(phrase + ' ' + this.name);
      } else {
        console.log('Hi!');
      }
    }
  }
  
  let user1: Greetable;
  
  user1 = new Person();
  
  // * is optional 
  //user1.name = 'sujan';
  
  user1.greet('Hi there - I am');
  console.log(user1);
  