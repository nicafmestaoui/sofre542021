import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngclass',
  templateUrl: './ngclass.component.html',
  styleUrls: ['./ngclass.component.css'],
})
export class NgclassComponent implements OnInit {
  open = true;
  inetrval: any;
  constructor() {}

  ngOnInit(): void {
    this.inetrval = setInterval(() => (this.open = !this.open), 1500);
  }

  closeInterval(): void {
    clearInterval(this.inetrval);
  }
}
