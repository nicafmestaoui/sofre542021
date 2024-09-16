import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Cv } from '../model/cv';
import { CvService } from '../services/cv.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  cvs: Cv[] = [];
  /*   @Output() forwardCvItem = new EventEmitter();
   */ constructor(
    private cvService: CvService,
    private toaster: ToastrService
  ) {}

  ngOnInit(): void {
    this.cvService.getCvs().subscribe(
      (cvs) => (this.cvs = cvs),
      (erreur) => {
        console.log(erreur);
        this.cvs = this.cvService.getFakeCvs();
        this.toaster.warning(
          `Problème de connexion avec le serveur, veuillez contacter l'admin. Les données affichées sont fake`
        );
      }
    );
  }
  /*   forwardCv(cv: Cv): void {
    this.forwardCvItem.emit(cv);
  } */
}
