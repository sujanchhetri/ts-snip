function add(a:number ,b:number){
    return a + b;
  }
  
  function printResult(num:number){ //void function:doesnt reurn value
  console.log("res:"+num);
  }
  
  function randomCallbackExample(a :number , b:number,cb:(num:number) => void){
  const result = a + b;
  cb(result);
  }
  
  printResult(add(5,5));
  
  // let combineValues : Function; //any function type
  // combineValues = printResult;
  // combineValues = add;
  // //combineValues =5;
  
  let combineValues : (a:number, b:number) => number;//specific function type
  
  combineValues = add;
  //combineValues =5;
  
  console.log(combineValues(5,5));
  
  randomCallbackExample(5,5,(result) => {
    console.log(result);
  });