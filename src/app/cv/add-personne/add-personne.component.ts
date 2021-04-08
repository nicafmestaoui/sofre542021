import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Cv } from '../model/cv';
import { CvService } from '../services/cv.service';

@Component({
  selector: 'app-add-personne',
  templateUrl: './add-personne.component.html',
  styleUrls: ['./add-personne.component.css']
})
export class AddPersonneComponent implements OnInit {

  constructor(
    private cvService: CvService,
    private toaster: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  addCv(cv: Cv): void {
    this.cvService.addCv(cv);
    this.toaster.success(`Le cv de ${cv.firstname} ${cv.name} a été ajuoté avec succès`);
    this.router.navigate(['cv']);
  }

}
