import {
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css'],
})
export class ColorComponent implements OnInit, OnChanges {
  @Input() defaultColor = 'red';
  bgc = '';
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.bgc = this.defaultColor;
    this.activatedRoute.params.subscribe(
      (params) => (this.bgc = params.couleur)
    );
    this.activatedRoute.queryParams.subscribe((qp) => console.log(qp));
  }

  changeColor(newColor: string): void {
    this.bgc = newColor;
  }

  ngOnChanges(changeValue: SimpleChanges) {
    console.log(changeValue);
  }

  goToCv() {
    this.router.navigate(['cv']);
  }
}
