function Logger(target: any, propertyName: string | Symbol) {
	console.log("property decorator");
	console.log(target, propertyName);
}

function Logger2(target: any, name: string, descriptor: PropertyDescriptor) {
	console.log("accessor decorator");
	console.log(target);
	console.log(name);
	console.log(descriptor);
}

function Logger3(
	target: any,
	name: string | Symbol,
	descriptor: PropertyDescriptor,
) {
	console.log("method decorator");
	console.log(target);
	console.log(name);
	console.log(descriptor);
}

function Logger4(
	target: any,
	name: string | Symbol,
	position: number,
) {
	console.log("Parameter decorator");
	console.log(target);
	console.log(name);
	console.log(position);
}

class Product {
	@Logger
	title: string;
	private _price: number;

	@Logger2
	set price(value: number) {
		if (value > 0) {
			this._price = value;
		} else {
			throw new Error("Invalid price - must be positive");
		}
	}

	constructor(t: string, p: number) {
		this.title = t;
		this._price = p;
	}

	@Logger3
	getPriceWithTax(@Logger4 tax: number) {
		return this._price * (1 + tax);
	}
}
