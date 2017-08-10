import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HeaderComponent} from './header/header.component';
import {MdIconModule, MdToolbarModule} from "@angular/material";

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MdToolbarModule,
    MdIconModule,
  ],
  exports: [
    HeaderComponent
  ],
  providers: []
})
export class CommonComponentsModule {
}