import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainNavComponent } from './main-nav.component';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    ReactiveFormsModule,
    InfiniteScrollModule
  ],
  declarations: [MainNavComponent],
  exports: [CommonModule, HttpModule, ReactiveFormsModule, MainNavComponent, InfiniteScrollModule]
})
export class SharedModule {
}
