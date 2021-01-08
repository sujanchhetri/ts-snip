//! add a <div id="app"></div> in index.html to run this example
//* a decorator factory
function Logger(logString: string) {
	return function (constructor: Function) {
		console.log(logString);
		console.log(constructor);
	};
}

function WithTemplate(template: string, hookId: string) {
	return function (constructor: any) {
		const hookElement = document.getElementById(hookId);
		const p = new constructor();
		if (hookElement) {
			hookElement.innerHTML = template;
			hookElement.querySelector("h1")!.textContent = p.name;
		}
	};
}

//@Logger('LOGGING - PERSON')

@WithTemplate("<h1>My object</h1>", "app")

//* a decorator factory
class Person {
	name = "sujan";

	constructor() {
		console.log("Creating a person object");
	}
}

const person = new Person();

console.log(person);
