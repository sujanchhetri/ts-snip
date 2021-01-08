// interface AddFunction {
//  (a:number ,b:number ):number ;
// }
// * can be done as above,

type AddFunction = (a: number, b: number) => number;

let add: AddFunction;

add = (a: number, b: number) => {
	return a + b;
};

console.log(add(5, 5));
