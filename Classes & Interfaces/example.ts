function add(a: number, b: number, showResult: boolean,phrase: string) {
  
    const result = a + b;
    if (showResult) {
      console.log(phrase + result);
    } else {
      return a + b;
    }
  }
  
  const a = 5;
  const b = 6;
  const printResult = true;
  const resultPhrase = 'Result is: ';
  
  console.log(add(a, b, printResult,resultPhrase));
  