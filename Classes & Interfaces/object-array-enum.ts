// const person : {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role : [number, string];
// } = {
//   name: "sujan",
//   age: 21,
//   hobbies: ["sports", "money"],
//   role : [2,'author']
// };

// person.role.push('admin');
// //! person.role[1] = 10; cannot enter a single element as 2 is must need size

// // * person.role = [0,'admin']; can do this

// console.log(person.role);

/* const admin = 0;
const user = 1;
const author = 2;
*/

enum Role {
    ADMIN,
    USER,
  }
  
  const person = {
    name: "sujan",
    age: 21,
    hobbies: ["sports", "money"],
    role: Role.ADMIN,
  };
  
  if (person.role === Role.USER) {
    console.log("Is  not admin");
  } else {
    console.log("Is admin");
  }
  
  // let favActivities: string[];
  // favActivities = ["sports"];
  
  let favActivities: any[];
  favActivities = ["sports",4,"events"];
  
  
  // console.log(person.name);
  
  // for (const hobby of person.hobbies) {
  //   console.log(hobby.toUpperCase());
  // }
  