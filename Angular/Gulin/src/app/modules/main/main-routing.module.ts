import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from './main.component';
import {CommonComponentsModule} from "../../components/common-components.module";

export const routes: Routes = [
  {path: '', redirectTo: '/main', pathMatch: 'full'},
  {path: 'main', component: MainComponent}
]

@NgModule({
  declarations: [
    MainComponent
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
