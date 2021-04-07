import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Cv } from '../model/cv';
import { EmbaucheService } from '../services/embauche.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  @Input() cv: Cv = new Cv();
  constructor(
    private embaucheService: EmbaucheService,
    private toaster: ToastrService
  ) {}

  ngOnInit(): void {}

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
