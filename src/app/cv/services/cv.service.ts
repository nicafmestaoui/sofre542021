import { Injectable } from '@angular/core';
import { Cv } from '../model/cv';

@Injectable({
  providedIn: 'root',
})
export class CvService {
  cvs: Cv[] = [];
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

  getCvs(): Cv[] {
    return this.cvs;
  }
}
