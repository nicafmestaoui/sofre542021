import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})
export class SliderComponent implements OnInit {
  imageObservable: Observable<string> | null = null;
  @Input() paths = [
    'rotating_card_profile.png',
    'rotating_card_profile2.png',
    'rotating_card_profile3.png',
    'as.jpg',
    'cv.png',
    '404.png',
  ];
  @Input() timer = 1000;
  path = 'as.jpg';
  constructor() {}

  ngOnInit(): void {
    this.imageObservable = new Observable((observer) => {
      let i = 0;
      setInterval(() => {
        if (i === this.paths.length) {
          i = 0;
        }
        observer.next(this.paths[i++]);
      }, this.timer);
    });
    this.imageObservable.subscribe((path) => (this.path = path));
  }
}
