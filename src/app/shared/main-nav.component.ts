import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'intel-main-nav',
  template: `
    <section class="main-nav flex align-center space-between">

      <div class="main-nav__left">
        <ul class="flex align-center">
          <li class="main-nav__item">Nav Item</li>
          <li class="main-nav__item">Nav Item</li>
          <li class="main-nav__item">Nav Item</li>
        </ul>
      </div>

      <div class="main-nav__right">
        <ul class="flex align-center">
          <li class="main-nav__item">Nav Item</li>
          <li class="main-nav__item">Nav Item</li>
          <li class="main-nav__item">Nav Item</li>
        </ul>
      </div>

    </section>
  `,
  styles: [`

    .main-nav {
      height: 70px;
      background-color: cornflowerblue;
    }

    .main-nav__item {
      padding: 0px 1em;
      cursor: pointer;
    }

  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainNavComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
