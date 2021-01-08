interface Person {
    name: string;
    age: number;
  
    greet(phrase: string): void;
  }
  
  let userOne : Person 
  
  userOne = {
    name : 'sujan',
    age: 21 ,
    greet(phrase: string){
      console.log(phrase + ' ' + this.name);
    }
  }
  
  userOne.greet("Hello there");
  