// Call back way for handling async

// function doAsyncTask(cb) {
//   console.log('Async Task Calling Callback');
//   setTimeout(() => {
//     cb();
//   }, 1000);
// }

// doAsyncTask(() => console.log('Callback Called'));

// Promis way for handling async
const hasError = false;

function doAsyncTask() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Async Task Calling Callback');
      if (hasError) {
        reject('error');
      } else {
        resolve('done');
      }
    }, 1000);
  });
  return promise;
}

doAsyncTask()
  .then(
    (val) => console.log(val),
    (err) => console.error(err),
  );