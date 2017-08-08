import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainComponent} from './modules/main/main.component';

export const routes: Routes = [
  // {path: '', redirectTo: 'contact', pathMatch: 'full'},
  // {path: '', component: MainModule},
  {path: 'tasks', loadChildren: 'app/modules/main/main.module#MainModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
