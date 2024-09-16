import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class Logger {
  logger(message: unknown): void {
    console.log('From logger : ', message);
  }
}
