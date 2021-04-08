import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Cv } from '../model/cv';
import { EmbaucheService } from '../services/embauche.service';
import { CvService } from '../services/cv.service';
import { distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  cv: Cv = new Cv();
  constructor(
    private embaucheService: EmbaucheService,
    private toaster: ToastrService,
    private cvService: CvService
  ) {}

  ngOnInit(): void {
    this.cvService.clickItemSubject.pipe(
      distinctUntilChanged()
    ).subscribe((cv) => (this.cv = cv));
  }

  embaucher(): void {
    if (this.embaucheService.embaucher(this.cv)) {
      this.toaster.success(
        `${this.cv.firstname} ${this.cv.name} a été préselectionné pour embauche`
      );
    } else {
      this.toaster.warning(
        `${this.cv.firstname} ${this.cv.name} est déjà préselectionné`
      );
    }
  }
}
