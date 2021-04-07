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

  getCvById(id: number): Cv | null {
    const cv = this.cvs.find((cv) => cv.id === id);
    if (cv) {
      return cv;
    }
    return null;
  }

  deleteCv(cv: Cv | null): boolean {
    if (cv) {
      const index = this.cvs.indexOf(cv);
      console.log(index);

      if (index > -1) {
        this.cvs.splice(index, 1);
        return true;
      } else {
        return false;
      }
    }
    return false;
  }
}
