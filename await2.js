async function createFlow() {
  const data = await getPromise();
  console.log(data);
}
createFlow();

function getPromise() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve("DATA DATA DATA DATA");
    }, 300);
  });
}
