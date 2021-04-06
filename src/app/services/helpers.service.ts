import { Injectable } from '@angular/core';
import { Logger } from './logger';

@Injectable({
  providedIn: 'root'
})
export class HelpersService {

  constructor(
    /* S'il te plait Mr l'injector donne moi une instance
      de Logger et sauvgarde la dans la variable loggerService
    */
    private loggerService: Logger
  ) { }

  sayCc() {
    this.loggerService.logger('cc');

  }
}
