import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-fils',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.css'],
})
export class FilsComponent implements OnInit {
  @Output() sendMessageToDad = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  sendMessage(): void {
    this.sendMessageToDad.emit('cc papa');
  }
}
