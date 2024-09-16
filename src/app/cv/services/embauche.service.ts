import { Injectable } from '@angular/core';
import { Cv } from '../model/cv';

@Injectable({
  providedIn: 'root',
})
export class EmbaucheService {
  embauchees: Cv[] = [];
  constructor() {}

  getListeEmbauchees(): Cv[] {
    return this.embauchees;
  }
  embaucher(cv: Cv): boolean {
    if (this.embauchees.some((actualCv) => actualCv === cv)) {
      return false;
    }
    this.embauchees.push(cv);
    return true;
  }
}
