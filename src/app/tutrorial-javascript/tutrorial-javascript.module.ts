import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NavMainComponent } from '../nav-main/nav-main.component';
import { ContentMainPageComponent } from '../components/content-main-page/content-main-page.component';
import { SharedModule } from '../shared/shared.module';
import { SomeComponent } from '../some/some.component';



const routes: Routes = [
  { path: '', component: NavMainComponent, children: [
    // { path: '', redirectTo: '/javaScript/:section', pathMatch: 'full'},
    { path: ':section/theory', component: ContentMainPageComponent },
    { path: ':section/tests', component: ContentMainPageComponent },
    { path: ':section/practice', component: ContentMainPageComponent }

  ]},

];

@NgModule({
  declarations: [
    NavMainComponent,
    ContentMainPageComponent,
    SomeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    
  ],
  exports: [RouterModule]
})
export class TutrorialJavascriptModule { }
