import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.css'],
})
export class WordComponent implements OnInit {
  size = 50;
  color = 'blue';
  font = 'garamond';
  constructor() {}

  ngOnInit(): void {}
}
