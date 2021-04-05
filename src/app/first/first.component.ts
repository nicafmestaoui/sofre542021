import { Component, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
})
export class FirstComponent implements OnInit, OnChanges {
  name = 'aymen';
  bgc = 'yellow';
  inputContent = '';
  isHidden = false;
  constructor() {}
  showHide() {
    this.isHidden = !this.isHidden;
  }
  showInput(input: string) {
    this.inputContent = input;
  }
  ngOnInit(): void {}
  ngOnChanges(): void {
    console.log('cc');
  }
}
