// * property is defined as index
interface ErrorChecker{
    [prop:string]:string;
  }
  
  const errorCheck:ErrorChecker = {
    email : 'Not a valid email',
    username : 'Must be capital at start'
  };