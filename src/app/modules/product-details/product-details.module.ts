import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Pages
import { ProductDetailsComponent } from './product-details.component';

// ROUTER
import { RouterModule, Routes } from '@angular/router';

// ROUTES
export const ROUTES: Routes = [
  { path: '', component: ProductDetailsComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [
    ProductDetailsComponent
  ],
  exports: [
    ProductDetailsComponent
  ],
  entryComponents: [
    ProductDetailsComponent
  ]
})
export class ProductDetailsModule { }
