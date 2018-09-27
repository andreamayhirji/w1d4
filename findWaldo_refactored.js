//using forEach

// are, found  -- these are parameters

function findWaldo(arr, cb) {
//                      these need to be in this order for forEach to run.
  arr.forEach(function (element, i, list) {
    if (element === "Waldo") {
      cb(i);
    }
  })
}

function actionWhenFound(i) {
  console.log("Found Waldo at index " + i) ;
}

// ["Alice", "Bob", "Waldo", "Winston"] and actionWhenFound -- these are arguments

findWaldo(["Alice", "Bob", "mary", "Waldo", "Winston"], actionWhenFound);







// without forEach
// function findWaldo.forEach(arr, found) {
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] === "Waldo") {
//       found([i]);   // execute callback
//     }
//   }
// }

// function actionWhenFound([i]) {
//   console.log("Found Waldo at index " + [i]) ;
// }

// // ["Alice", "Bob", "Waldo", "Winston"] and actionWhenFound -- these are arguments

// findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
