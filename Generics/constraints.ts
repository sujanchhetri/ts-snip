//* constraints ;<T extends object, U extends object>
function merge<T extends object, U extends object>(a: T, b: U) {
	return Object.assign(a, b);
}

const mergedObj = merge({ name: "sujan" }, { age: 21 });
console.log(mergedObj);

//*defining a interface
interface Lengthy {
	length: number;
}

//* using as a generic method
function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
	let descriptionText = "Got no value";
	if (element.length === 1) {
		descriptionText = "got 1 element";
	} else if (element.length > 1) {
		descriptionText = "Got" + element.length + " elements";
	}
	return [element, descriptionText];
}

//console.log(countAndDescribe("hello there"));

console.log(countAndDescribe(["hello", "there"]));

//*keyof method
function extractAndConvert<T extends object, U extends keyof T>(
	object: T,
	key: U,
) {
	return "Value:" + object[key];
}

extractAndConvert({ name: "sujan" }, "name");
