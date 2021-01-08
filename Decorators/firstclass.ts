//* a simple decorator 
function Logger (constructor:Function){
    console.log('Logging ...');
    console.log(constructor);
}
@Logger
//* a simple decorator 
class Person {
	name = "sujan";

	constructor() {
		console.log("Creating a person object");
	}
}

const person = new Person();

console.log(person);
