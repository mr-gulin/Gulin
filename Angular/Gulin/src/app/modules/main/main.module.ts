import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainRoutingModule} from './main-routing.module';
import {RootScopeService} from "../../common/root-scope.service";
import {MainInfoComponent} from './components/main-info/main-info.component';

@NgModule({
    declarations: [
    ],
    imports: [
        CommonModule,
        MainRoutingModule
    ],
    exports: [],
    providers: [RootScopeService]
})
export class MainModule {
}
