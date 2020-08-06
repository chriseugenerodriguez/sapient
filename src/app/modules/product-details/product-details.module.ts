import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Pages
import { ProductDetailsComponent } from './product-details.component';

// BOOTSTRAP
import { ModalModule } from 'ngx-bootstrap/modal';
import { RatingModule } from 'ngx-bootstrap/rating';

// ROUTER
import { RouterModule, Routes } from '@angular/router';

// FORMS
import { FormsModule } from '@angular/forms';

// ROUTES
export const ROUTES: Routes = [
  { path: '', component: ProductDetailsComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    ModalModule.forRoot(),
    RatingModule.forRoot(),
    FormsModule
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
