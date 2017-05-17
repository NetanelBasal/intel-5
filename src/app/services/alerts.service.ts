import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/delay';
import { AppState } from '../store';
import { Store } from '@ngrx/store';
import * as alerts from '../actions/alerts.actions';

@Injectable()
export class AlertsService {

  constructor( private store : Store<AppState> ) {
  }

  getAlerts() {
    this.store.dispatch(new alerts.GetAction());

    Observable.of([1, 2, 4, 5, 5, 6, 4, 4, 3, 3, 3, 3, 4, 4, 43, 3433, 43, 43, 43, 4, 3443, 43, 4343, 43])
      .delay(2000).subscribe(data => {
      this.store.dispatch(new alerts.GetSuccessAction(data));
    });
  }

}