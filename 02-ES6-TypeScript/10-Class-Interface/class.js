"use strict";
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    name() {
        return `${this.firstName} ${this.lastName}`;
    }
    whoAreYou() {
        return `Hi I'm ${this.name()}`;
    }
}
let dom = new Person('Dominic', 'Torruellas');
console.log(dom.name());
console.log(dom.whoAreYou());
class Student extends Person {
    constructor(firstName, lastName, course) {
        super(firstName, lastName);
        this.course = '';
        this.course = course;
    }
    whoAreYou() {
        return `${super.whoAreYou()} and I'm studying ${this.course}`;
    }
}
let dom2 = new Student('Dom', 'Torr', 'Angular 5');
console.log(dom2.whoAreYou());
