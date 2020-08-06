import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// COMPONENTS
import { HeaderComponent } from './header.component';
import { HeaderMenuComponent } from './menu/menu.component';

// SERVICES
import { HeaderService } from '../../services/header/header.service';

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
  ],
  providers: [
    HeaderService
  ]
})
export class HeaderModule { }
