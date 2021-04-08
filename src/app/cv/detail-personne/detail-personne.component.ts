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
    this.toaster.success(`Cv a été supprimé avec succès`);
    this.cvService.deleteCv(this.cv);
    this.router.navigate(['cv']);
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
