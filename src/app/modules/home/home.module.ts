import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Pages
import { HomeComponent } from './home.component';

// ROUTER
import { RouterModule, Routes } from '@angular/router';

// ROUTES
export const ROUTES: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [
    HomeComponent
  ],
  exports: [
    HomeComponent
  ],
  entryComponents: [
    HomeComponent
  ]
})
export class HomeModule { }
