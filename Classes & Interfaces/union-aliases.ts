type CombineType = number | string | boolean;
type ConversionDescriptor = 'as-num' | 'as-text';

// function combine(
//   a: number | string,
//   b: number | string,
//   // resultConversion: string
//   resultConversion : 'as-num' | 'as-text'
// ) 

function combine(
  a: CombineType,
  b: CombineType,
  // resultConversion: string
  resultConversion : ConversionDescriptor
) {
  let result;
  if (typeof a === "number" && typeof b === "number" || resultConversion === 'as-num') {
    result = +a + +b;
  } else {
    result = a.toString() + b.toString();
  }
  return result;
  // if (resultConversion === 'as-num') {
  //   return +result;
  // } else {
  //   return result.toString();
  // }
}

console.log(combine(5, 5, 'as-num'));
console.log(combine('5', '5', 'as-num'));
console.log(combine('hey', 'there', 'as-text'));
