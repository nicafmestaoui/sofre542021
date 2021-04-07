import { Component, OnInit } from '@angular/core';
import { Cv } from '../model/cv';
import { Logger } from '../../services/logger';
import { HelpersService } from '../../services/helpers.service';
import { TodoService } from '../../todo/services/todo.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent implements OnInit {
  selectedCv: Cv = new Cv();
  constructor(
    private logger: Logger,
    private helper: HelpersService,
    private todoService: TodoService
  ) {
    this.logger.logger('cc je suis le cvComponent');
  }

  ngOnInit(): void {
    this.helper.sayCc();
  }
  getSelectedCv(cv: Cv): void {
    this.selectedCv = cv;
    this.todoService.logTodos();
  }
}
