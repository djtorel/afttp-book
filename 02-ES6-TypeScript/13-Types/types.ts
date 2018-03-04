let decimal: number = 6;
let done: boolean = false;
let color: string = 'blue';

let list: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

let fun: Function = () => console.log('Hello');

function returnNumber(): number {
  return 3;
}

enum Direction {
  Up,
  Down,
  Left,
  Right
}

let go: Direction;
go = Direction.Up;

class Person {};
let person: Person;
let people: Person[];

let notsure: any = 1;
notsure = '2';

function returnNothing(): void {
  console.log('moo');
}

returnNothing();

let value: any = 'Dominic Torruellas';
(<string> value).length;

// class Audio {}
// class Video {}
// class Link {}
// class Text {}

// class Post<T> {
//     content: T;
// }

// let videoPost: Post<Video>;


