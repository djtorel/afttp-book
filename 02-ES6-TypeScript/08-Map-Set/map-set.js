'use strict';

// let base = { a: 1, b: 2 };
// let obj = Object.create(base);
// obj['c'] = 3;
// for (let prop in obj) {
//   if (obj.hasOwnProperty(prop)) {
//     console.log(prop);
//   }
// }

let map = new Map()
  .set('A', 1)
  .set('B', 2)
  .set('C', 3);

let map2 = new Map([
  [ 'D', 4 ],
  [ 'E', 5 ],
  [ 'F', 6 ],
]);

for (let item of map) {
  console.log(item);
}

for (let key of map.keys()) {
  console.log(key);
}

for (let value of map.values()) {
  console.log(value);
}

for (let entry of map.entries()) {
  console.log(entry[0], entry[1]);
}

for (let [key, value] of map.entries()) {
  console.log(`Key: ${key}, Value: ${value}`);
}

let set = new Set()
  .add('Mango')
  .add('Apple')
  .add('Orange');

let set2 = new Set([
  'Banana',
  'Lemon',
  'Raspberry'
]);

for (let entry of set) {
  console.log(entry);
}