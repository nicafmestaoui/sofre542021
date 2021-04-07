import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cv } from '../model/cv';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  @Input() cv: Cv = new Cv();
  @Output() clickOnCvItem = new EventEmitter();
  @Input() size = 50;
  @Input() isRounded = true;
  constructor() {}

  ngOnInit(): void {}
  selectItem(): void {
    this.clickOnCvItem.emit(this.cv);
  }
}
