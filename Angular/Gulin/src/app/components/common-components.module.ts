import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HeaderComponent} from './header/header.component';
import {MdButtonModule, MdIconModule, MdToolbarModule} from "@angular/material";

@NgModule({
    declarations: [
        HeaderComponent
    ],
    imports: [
        CommonModule,
        MdToolbarModule,
        MdIconModule,
        MdButtonModule
    ],
    exports: [
        HeaderComponent
    ],
    providers: []
})
export class CommonComponentsModule {
}
