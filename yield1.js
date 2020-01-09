function* createflow() {
  console.log("createflowcreateflowcreateflow");
  yield 2;
  yield 4;
  yield 5;
}

let returnNextEl = createflow();
console.log("HERE");
let el1 = returnNextEl.next();
console.log(el1);

let el2 = returnNextEl.next();
console.log(el2);

let el3 = returnNextEl.next();
console.log(el3);

let el4 = returnNextEl.next();
console.log(el4);
