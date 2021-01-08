// * arrow function
const add = (a: number, b: number) => a + b;
//  {
//      return a + b;
//  };

console.log(add(5, 5));

// * The spread operator
const play = ["football", "volleyball"];
const hobby = ["learning"];

hobby.push(...play);

console.log(hobby);

const person = {
  fname: "sujan",
  age: 21,
};

const copiedNow = { ...person };

console.log(copiedNow);

// * rest parameters ; same as push function

const adding = (...numbers: number[]) => {
  return numbers.reduce((curResult, curValue) => {
    //reduce performs operation on each element in an array
    console.log(curResult);
    return curResult + curValue;
  }, 0); //starting value is 0 for this reduce method
};

const addedNumbers = adding(5, 10, 2, 3.7);
console.log(addedNumbers);

// * Array  destructuring
const [hob1, hob2, ...remainingHobby] = hobby;

console.log(hobby, hob1, hob2);

// * object destructuring
const { fname, age } = person; //can store value as fname:username
console.log(fname, age);
