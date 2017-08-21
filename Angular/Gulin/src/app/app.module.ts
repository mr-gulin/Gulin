import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {MainModule} from './modules/main/main.module';
import {MdButtonModule, MdToolbarModule} from '@angular/material';
import {MdIconModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CommonComponentsModule} from './components/common-components.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        MainModule,
        /** All common components module */
        CommonComponentsModule,
        /** Material Modules  (rescheduled to CommonComponentsModule*/
        // MdToolbarModule,
        // MdIconModule,
        // MdButtonModule,
        /** Routing */
        AppRoutingModule
    ],
    exports: [],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
