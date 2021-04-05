import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
})
export class FirstComponent implements OnInit {
  name = 'aymen';
  bgc = 'yellow';
  isHidden = false;
  constructor() {}
  showHide() {
    this.isHidden = !this.isHidden;
  }
  ngOnInit(): void {}
}
