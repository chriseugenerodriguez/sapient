import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// COMPONENTS
import { FooterComponent } from './components/footer/footer.component';
import { HeaderModule } from './components/header/header.module';


@NgModule({
  imports: [
    CommonModule,
    HeaderModule
  ],
  declarations: [
    FooterComponent
  ],
  exports: [
    FooterComponent
  ]
})
export class SharedModule { }
