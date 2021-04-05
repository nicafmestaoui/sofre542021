import {
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css'],
})
export class ColorComponent implements OnInit, DoCheck, OnChanges {
  @Input() defaultColor = 'red';
  bgc = '';
  constructor() {}

  ngOnInit(): void {
    this.bgc = this.defaultColor;
  }

  changeColor(newColor: string): void {
    this.bgc = newColor;
  }
  ngDoCheck(): void {
    console.log('cc');
  }
  ngOnChanges(changeValue: SimpleChanges) {
    console.log(changeValue);
  }
}
