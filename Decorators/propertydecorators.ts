function Logger(target:any,propertyName:string|Symbol){
    console.log('property decorator');
    console.log(target,propertyName);
}

class Product {
    @Logger
	title: string;
    private _price: number;
    
    set price(value: number) {
        if(value > 0){
            this._price = value;
        }else{
            throw new Error('Invalid price - must be positive')
        }
    }

	constructor(t: string, p: number) {
		this.title = t;
		this._price = p;
	}

	getPriceWithTax(tax: number) {
		return this._price * (1 + tax);
	}
}
