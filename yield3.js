function* createflow() {
  let num = 10;
  let newNum = yield num;
  yield newNum + 2;
}

let returnNextEl = createflow();
let el1 = returnNextEl.next();
console.log(el1);
el1.value.then(data => {});
let el2 = returnNextEl.next();
console.log(el2);
