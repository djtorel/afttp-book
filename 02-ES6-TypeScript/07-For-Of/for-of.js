'use strict';

// let array = [1, 2, 3];

// array.forEach(value => {
//   console.log(value);
// });

let obj = { a: 1, b: 2 };

for (let prop in obj) {
  console.log(obj[prop]);
}

let array2 = [
  'test',
  'hello',
  'world',
];

for (let value of array2) {
  console.log(value);
}