import { Component, OnInit, ChangeDetectionStrategy, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'intel-alerts',
  template: `

    <section class="alerts">

      <header class="flex space-between">
        <div class="left flex align-center">
          <p class="alerts-header__small bold">ALERTS</p>
          <p class="alerts-header__large bold">PLAN EXECUTION</p>
        </div>

        <div class="right flex align-center">
          <button class="alerts-show-more" (click)="showAll = true" [disabled]="false">Show all</button>
          <p>6 / 21</p>
        </div>
      </header>


      <section class="alerts-container flex flex-wrap" infiniteScroll
               [ngClass]="{'alerts-container-show-all': showAll}"
               infiniteScrollContainer=".alerts-container"
               [infiniteScrollDistance]="3.5"
               (scrolled)="onScroll()">

        <div *ngIf="alerts.isFetching">Loading...</div>

        <div class="alert flex-1" *ngFor="let alert of alerts.entities">
          <div class="alert-container flex align-center">
            <div class="alert-icon"><img src="assets/warning.svg" alt=""></div>
            <div class="flex-1 alert-content-container">
              <div class="flex align-center space-between">
                <p class="alert-title">Alert title</p>
                <p class="alert-time">13:35</p>
              </div>
              <p class="alert-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
            </div>
          </div>
        </div>

      </section>


    </section>

  `,
  styles: [ `
    .alerts {
      border: 1px solid lightgray;
      padding: 1em;
      margin-bottom: 2em;
      background-color: #fff;
    }

    .alerts-container {
      height: 142px;
      overflow: hidden;
    }

    .alerts-container.alerts-container-show-all {
      overflow-y: scroll;
    }

    header {
      margin-bottom: 1em;
    }

    .alerts-header__large {
      font-size: 1.1rem;
    }

    .alerts-header__small {
      font-size: 0.8rem;
      margin-right: 1.3em;
    }

    .alert {
      flex: 1 1 calc(100% / 3);
      /*border-right: 1px solid lightgray;*/
      padding-right: 1.3em;
    }

    .alert-icon {
      margin-right: 0.7em;
      width: 17px;
    }

    .alert:not(:nth-last-child(-n+3)) .alert-content-container {
      border-bottom: 1px solid lightgray;
      padding-bottom: 1em;
    }

    .alert-title, .alert-time {
      color: dodgerblue;
      text-transform: uppercase;
      margin-bottom: 0.4em;
      font-size: 0.8rem;
      margin-top: 0.7em;
    }

    .alert-content {
      font-size: 0.7rem;
    }

    .alerts-show-more {
      margin-right: 1em;
    }
  ` ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlertsComponent {
  @Input() alerts;
  @Output() more = new EventEmitter<boolean>();
  showAll : boolean = false;


  onScroll() {
    console.log('fetch more');
    this.more.emit(true);
  }

}
