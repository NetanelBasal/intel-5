import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../store';
import { AlertsService } from '../services/alerts.service';

@Component({
  selector: 'intel-home',
  template: `

    <section class="flex home-layout">

      <section class="left flex-1">

        <section>
          <h1>Diagram</h1>
        </section>

        <section>
          <h1>Subjects</h1>
        </section>

      </section>

      <section class="right flex-1">

        <section>
          <intel-alerts [alerts]="alerts$ | async" (more)="getAlerts($event)"></intel-alerts>
        </section>

        <section>
          <h1>Charts</h1>
        </section>

      </section>

    </section>

  `,
  styles: [`
    .home-layout {
      margin: 2em 0;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  alerts$;

  constructor( private store : Store<AppState>, private alertsService : AlertsService ) {
    this.alerts$ = this.store.select(state => state.alerts);
  }

  ngOnInit() {
    this.alertsService.getAlerts();
  }

  getAlerts( more ) {
    console.log(more);

  }

}
