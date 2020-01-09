function* createflow(arr) {
  for (var i = 0; i < arr.length; i++) {
    yield arr[i];
  }
  return "DONE";
}

let returnNextEl = createflow([1, 2, 3, 4, 5, 6]);

let itr = {};

while (!itr.done) {
  itr = returnNextEl.next();
  console.log(itr);
}
