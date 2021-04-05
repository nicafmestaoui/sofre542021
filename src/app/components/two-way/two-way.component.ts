import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way',
  templateUrl: './two-way.component.html',
  styleUrls: ['./two-way.component.css']
})
export class TwoWayComponent implements OnInit {
  two = 'init Value';
  constructor() { }

  ngOnInit(): void {
  }
  changeTwo(): void {
    this.two = 'new two Value';
  }

}
