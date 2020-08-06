import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// COMPONENT
import { FooterComponent } from './footer.component';
import { FooterMenuComponent } from './menu/menu.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FooterComponent,
    FooterMenuComponent
  ],
  exports: [
    FooterComponent,
    FooterMenuComponent
  ]
})
export class FooterModule { }
