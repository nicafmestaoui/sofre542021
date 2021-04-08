import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Cv } from '../model/cv';

const PERSONNE_API =
  'https://immense-citadel-91115.herokuapp.com/api/personnes/';
@Injectable({
  providedIn: 'root',
})
export class CvService {
  cvs: Cv[] = [];
  clickItemSubject = new Subject<Cv>();
  constructor(private http: HttpClient) {
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

  getFakeCvs(): Cv[] {
    return this.cvs;
  }

  getCvs(): Observable<Cv[]> {
    return this.http.get<Cv[]>(PERSONNE_API);
  }

  getFakeCvById(id: number): Cv | null {
    const cv = this.cvs.find((cv) => cv.id === id);
    if (cv) {
      return cv;
    }
    return null;
  }
  getCvById(id: number): Observable<Cv> {
    return this.http.get<Cv>(PERSONNE_API + id);
  }

  deleteFakeCv(cv: Cv | null): boolean {
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
  deleteCv(id: number): Observable<{ count: number }> {
    return this.http.delete<{ count: number }>(PERSONNE_API + id);
  }
  addFakeCv(cv: Cv): void {
    this.cvs.push(cv);
  }

  addCv(cv: Cv): Observable<Cv> {
    return this.http.post<Cv>(PERSONNE_API, cv);
  }

  selectItem(cv: Cv): void {
    this.clickItemSubject.next(cv);
  }
}
