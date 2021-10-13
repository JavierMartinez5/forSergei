import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NavMainComponent } from '../nav-main/nav-main.component';
import { ContentMainPageComponent } from '../components/content-main-page/content-main-page.component';
import { SharedModule } from '../shared/shared.module';
import { SomeComponent } from '../some/some.component';
import { PracticeSectionComponent } from '../components/practice-section/practice-section.component';
import { TestsSectionComponent } from '../components/tests-section/tests-section.component';
import { TheorySectionComponent } from '../components/theory-section/theory-section.component';

// const routes: Routes = [
//   { path: '', component: NavMainComponent, children: [
//     // { path: '', redirectTo: '/javaScript/11', pathMatch: 'full'},
//     { path: ':section/theory', component: ContentMainPageComponent },
//     { path: ':section/tests', component: ContentMainPageComponent },
//     { path: ':section/practice', component: ContentMainPageComponent }

//   ]},

// ];

const routes: Routes = [
  {
    path: '',
    component: NavMainComponent,
    children: [
      { path: '', redirectTo: '/javaScript/11/theory', pathMatch: 'full'},
      {
        path: ':id',
        component: ContentMainPageComponent,
        children: [
          { path: 'theory', component: TheorySectionComponent },
          { path: 'tests', component: TestsSectionComponent },
          { path: 'practice', component: PracticeSectionComponent },
        ],
      },
    ],
  },
];

@NgModule({
  declarations: [NavMainComponent, ContentMainPageComponent, SomeComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TutrorialJavascriptModule {}
