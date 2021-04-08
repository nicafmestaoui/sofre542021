import { Component, OnInit } from '@angular/core';
import { Cv } from '../model/cv';
import { Logger } from '../../services/logger';
import { HelpersService } from '../../services/helpers.service';
import { TodoService } from '../../todo/services/todo.service';
import { CvService } from '../services/cv.service';
import { distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent implements OnInit {
  /*   selectedCv: Cv = new Cv(); */
  nbre = 0;
  constructor(
    private logger: Logger,
    private helper: HelpersService,
    private todoService: TodoService,
    private cvService: CvService
  ) {
    this.logger.logger('cc je suis le cvComponent');
  }

  ngOnInit(): void {
    this.cvService.clickItemSubject.pipe(
      distinctUntilChanged()
    ).subscribe((cv) => this.nbre++);
    this.helper.sayCc();
  }
  /*   getSelectedCv(cv: Cv): void {
    this.selectedCv = cv;
    this.todoService.logTodos();
  } */
}
