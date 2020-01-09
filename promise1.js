// Promise approach
const axios = require("axios");

//

//  Async/Await is a long anticipated JavaScript feature that makes working with asynchronous functions much more enjoyable
//  and easier to understand. It is build on top of Promises and is compatible with all existing Promise-based APIs.

//await wirk with promise only

// Async/Await approach

async function getJSONAsync() {
  let json = await axios.get("https://jsonplaceholder.typicode.com/todos/1");
  console.log("ASYNC:resolve");
  return json;
}

getJSONAsync();
console.log("OutAsync");
