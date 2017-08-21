import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

export const routes: Routes = [
    {path: '', redirectTo: '/welcome', pathMatch: 'full'},
    {path: 'welcome', loadChildren: './modules/main/main.module#MainModule'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
