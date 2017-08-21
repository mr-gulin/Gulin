import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from './main.component';
import {CommonComponentsModule} from "../../components/common-components.module";
import {MainInfoComponent} from "./components/main-info/main-info.component";

export const routes: Routes = [
    // {path: '', redirectTo: '/main', pathMatch: 'full'},
    {path: 'welcome', component: MainComponent}
];

@NgModule({
    declarations: [
        MainComponent,
        MainInfoComponent
    ],
    imports: [
        CommonComponentsModule,
        RouterModule.forChild(routes),
    ],
    exports: [
        RouterModule
    ],
    providers: []
})
export class MainRoutingModule {
}
