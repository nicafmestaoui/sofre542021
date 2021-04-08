import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-test-observable',
  templateUrl: './test-observable.component.html',
  styleUrls: ['./test-observable.component.css'],
})
export class TestObservableComponent implements OnInit {
  constructor(private toaster: ToastrService) {}

  ngOnInit(): void {
    const observable = new Observable<number>((observer) => {
      let i = 5;
      setInterval(() => {
        if (!i) {
          observer.complete();
        }
        observer.next(i--);
      }, 1000);
    });
    observable.subscribe((val) => {
      console.log(val);
    });
    observable.subscribe(
      (data) => this.toaster.info('' + data),
      (erreur) => console.log(erreur),
      () => this.toaster.warning('End of the game')
    );
  }
}
