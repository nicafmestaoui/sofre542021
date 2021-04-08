import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CvService } from '../services/cv.service';
import { Cv } from '../model/cv';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-detail-personne',
  templateUrl: './detail-personne.component.html',
  styleUrls: ['./detail-personne.component.css'],
})
export class DetailPersonneComponent implements OnInit, OnDestroy {
  cv: Cv | null = null;
  subscription: Subscription | null = null;
  constructor(
    private cvService: CvService,
    private toaster: ToastrService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.subscription = this.activatedRoute.params.subscribe((params) => {
      this.cvService.getCvById(+params.id).subscribe(
        (cv) => {
          this.cv = cv;
        },
        (erreur) => {
          this.router.navigate(['cv']);
        }
      );
    });
  }

  deleteCv(): void {
    if (this.cv != null) {
      if (this.cv.id) {
        this.cvService.deleteCv(this.cv.id).subscribe(
          (data) => {
            this.toaster.success(`Cv supprimé avec succès`);
            this.router.navigate(['cv']);
          },
          (erreur) => {
            this.toaster.error(
              `Problème de suppression veuillez contacter l'admin`
            );
            console.log(erreur);
          }
        );
      }
    } else {
      console.log('null');
    }
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
