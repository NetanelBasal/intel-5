import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { AlertsComponent } from './alerts.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [HomeComponent, AlertsComponent]
})
export class HomeModule {
}
