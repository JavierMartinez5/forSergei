import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', component: AppComponent, children: [
    { path: '', redirectTo: '/javaScript', pathMatch: 'full'},

  ]},
  {
    path: 'javaScript',  loadChildren: () => import('./tutrorial-javascript/tutrorial-javascript.module').then(m => m.TutrorialJavascriptModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
