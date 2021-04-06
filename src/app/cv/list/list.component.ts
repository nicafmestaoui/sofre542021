import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Cv } from '../model/cv';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  cvs: Cv[] = [];
  @Output() forwardCvItem = new EventEmitter();
  constructor() {
    this.cvs = [
      new Cv(1, 'sellaouti', 'aymen', '           ', 'teacher', 123456, 38),
      new Cv(
        2,
        'Sahlli',
        'amani',
        'rotating_card_profile.png',
        'Dev',
        123456,
        23
      ),
      new Cv(3, 'Sahlli', 'amani', '', 'Dev', 123456, 22),
    ];
  }

  ngOnInit(): void {}
  forwardCv(cv: Cv): void {
    this.forwardCvItem.emit(cv);
  }
}
