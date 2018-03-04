import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

import { Joke } from '../joke';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent implements OnInit {
  @Input() joke: Joke;
  @Output() jokeDeleted = new EventEmitter<Joke>();

  constructor() { }

  deleteJoke(joke: Joke) {
    this.jokeDeleted.emit(joke);
  }

  ngOnInit() {
  }

}
