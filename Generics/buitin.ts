const names: Array<string> = []; //*array of strings;Array<string>can specify the generic type

//*array of strings;Promise<number>can specify the generic
const promise: Promise<number> = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve(10);
	}, 2000);
});

