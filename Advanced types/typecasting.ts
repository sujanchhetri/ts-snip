//const userInputelement = <HTMLInputElement>document.getElementById('user-input')!;

//or this

// const userInputelement = document.getElementById('user-input')! as HTMLInputElement;

// userInputelement.value = 'hello there';

// or this

const userInputelement = document.getElementById('user-input');

if(userInputelement){
  (userInputelement  as HTMLInputElement).value = 'hello there';
}

