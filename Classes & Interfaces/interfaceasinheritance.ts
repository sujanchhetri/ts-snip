interface Named {
	readonly name: string;
}

// * interface can inherit from another interface, also from multiple classes
interface Business extends Named {
	//name: string;
	// * act as same like private,cannot be  updated outside of this
	//readonly name: string;

	business(phrase: string): void;
}

class Person implements Business {
	name: string;
	age = 21;

	constructor(name: string) {
		this.name = name;
	}

	business(phrase: string) {
		console.log(phrase + " " + this.name);
	}
}

let userOne: Business;

userOne = new Person("sujan");

userOne.business("hello there");
console.log(userOne);
