class dataStorage<T extends string | number | boolean> {
	private data: T[] = [];

	addItem(item: T) {
		this.data.push(item);
	}

	removeItem(item: T) {
		this.data.splice(this.data.indexOf(item), 1);
	}

	getItems() {
		return [...this.data];
	}
}

const textStorage = new dataStorage<string>();
//const numberStorage = new dataStorage<number>();

textStorage.addItem("sujan");
textStorage.addItem("chhetri");
textStorage.addItem("coder");

console.log(textStorage.getItems());


