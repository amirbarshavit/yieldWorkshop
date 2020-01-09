function createFunction(array) {
  let i = 0;
  function inner() {
    const element = array[i];
    i++;
    return element;
  }
  return inner;
}

// function createFunction(array) {
//   for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
//   }
// }

// createFunction([1, 2, 3]);
const returnNextElement = createFunction([1, 2, 3]);
console.log(returnNextElement());
console.log(returnNextElement());
console.log(returnNextElement());
console.log(returnNextElement());
