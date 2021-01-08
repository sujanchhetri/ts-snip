//* our own generic function;merge<T,U>
function merge<T,U>(a: T, b: U){
    return Object.assign(a, b);
}

//* can pass our own parameter merge<{name:string },{ age:number}>
//const mergedObj = merge({name: 'sujan'},{age:21});
const mergedObj = merge<{name:string },{ age:number}>({name: 'sujan'},{age:21});
console.log(mergedObj.age);
