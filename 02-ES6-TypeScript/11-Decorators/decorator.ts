function Student(config) {
  return target => {
    Object.defineProperty(target.prototype, 'course', { value: () => config.course });
  }
}


@Student({
  course: 'Angular 5'
})
class Person {
  firstName;
  lastName;
  
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

let dom = new Person('Dominic', 'Torruellas');
console.log(dom.course());