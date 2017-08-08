import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {MainComponent} from './main.component';
import {CommonModule} from '@angular/common';
import {MainRoutingModule} from './main-routing.module';

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    MainRoutingModule
  ],
  exports: [
    MainComponent
  ],
  providers: []
})
export default class MainModule {
}
