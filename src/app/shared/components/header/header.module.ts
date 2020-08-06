import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// COMPONENTS
import { HeaderComponent } from './header.component';
import { HeaderMenuComponent } from './menu/menu.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HeaderComponent,
    HeaderMenuComponent
  ],
  exports: [
    HeaderComponent,
    HeaderMenuComponent
  ],
  entryComponents: [
    HeaderComponent,
    HeaderMenuComponent
  ]
})
export class HeaderModule { }
