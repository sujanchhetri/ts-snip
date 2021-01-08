// ---------------------------example of type unknown----------------------------------
let userInput : unknown;//dont know what the type will be but can be assigned
 let userName : string;

 userInput = 5;
 userInput = 'sujan';

 if(typeof userInput === 'string'){
   userName = userInput;
 }
 function genError(msg:string , code : number){ //never produces a return value
   throw {message:msg, errorCode:code}
 }

 genError('Error occured',500)