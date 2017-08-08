import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {MainComponent} from './main.component';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';

export const routes: Routes = [
  {path: '', component: MainComponent}
]

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    MainComponent,
    RouterModule
  ],
  providers: []
})
export class MainRoutingModule {
}
