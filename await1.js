function getPromise() {
  return new Promise(function(resolve, reject) {
    return "asdfasdfa";
  });
}

function* createFlow() {
  const data = yield getPromise();
  console.log(data);
}

function dataIsHere(data) {
  getNextItem.next(data);
}

const getNextItem = createFlow();

const item = getNextItem.next().value;

item.then(data => {
  getNextItem.next(data);
});
