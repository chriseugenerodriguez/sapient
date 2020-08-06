import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// PAGES
import { ProductDetailsModule } from './modules/product-details/product-details.module';

// SHARED
import { HeaderModule } from './shared/components/header/header.module';
import { FooterModule } from './shared/components/footer/footer.module';

// ROUTING
import { AppRoutingModule } from './app.routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    // ROUTING
    AppRoutingModule,

    // PAGES
    ProductDetailsModule,

    // SHARED
    HeaderModule,
    FooterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
