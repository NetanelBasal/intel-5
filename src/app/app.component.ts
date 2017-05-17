import { Component } from '@angular/core';

@Component({
  selector: 'intel-root',
  template: `
    <intel-main-nav></intel-main-nav>
    <div class="container">
      <router-outlet></router-outlet>
    </div>
  `,
})
export class AppComponent {

}
